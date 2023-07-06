import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'

import { signInWithPopup, GoogleAuthProvider, signOut, User as FirebaseUser } from 'firebase/auth'

import { auth } from 'config/firebaseConfig'

const signInWrapper = async () => {
  try {
    const result = signInWithPopup(auth, new GoogleAuthProvider())
  } catch (error) {
    console.error(error)
  }
}

export const SignIn = () => {
  return <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
}

export const SignOut = () => {
  return (
    <div>
      Hello, {auth.currentUser?.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}
