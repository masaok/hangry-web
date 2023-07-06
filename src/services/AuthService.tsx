import { signInWithPopup, GoogleAuthProvider, signOut, signInWithRedirect } from 'firebase/auth'

import { auth } from 'config/firebaseConfig'
import { isPortrait } from 'utils/orientation'

export const SignIn = () => {
  return isPortrait() ? (
    // Mobile: signInWithRedirect
    <button onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}>Sign In</button>
  ) : (
    // Desktop: signInWithPopup
    <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
  )
}

export const SignOut = () => {
  return (
    <div>
      Hello, {auth.currentUser?.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}
