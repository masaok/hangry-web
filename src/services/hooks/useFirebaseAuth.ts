import { useEffect, useState } from 'react'

import { User as FirebaseUser } from 'firebase/auth'

import { auth } from 'config/firebaseConfig'
import { UserService } from 'services/UserService'

const userService = new UserService()

type AuthData = {
  user: FirebaseUser | null
  loading: boolean
  userProfile: any
}

export const useFirebaseAuth = (): AuthData => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<FirebaseUser | null>(null) // https://stackoverflow.com/a/69048952
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    return auth.onAuthStateChanged(async user => {
      if (user) {
        let newUserProfile = await userService.fetchById(user.uid)

        if (!newUserProfile) {
          const profile = { displayName: user.displayName, email: user.email }
          newUserProfile = await userService.createWithId(user.uid, { ...profile })
        }

        setUserProfile(newUserProfile)
        setUser(user)
      } else {
        console.warn('USER SIGNED OUT')
        setUser(null)
      }

      setLoading(false)
    })
  }, [])

  return { user, loading, userProfile }
}
