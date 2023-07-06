import { signOut } from 'firebase/auth'

import { Avatar, makeStyles } from '@material-ui/core'

import { auth } from 'config/firebaseConfig'

import { SignIn } from 'services/AuthService'
import { useFirebaseAuth } from 'services/hooks/useFirebaseAuth'

const useStyles = makeStyles(
  theme => ({
    root: {},

    header: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(2),
    },

    body: {},

    user: {},

    avatar: {
      marginRight: theme.spacing(1),
    },

    userInfo: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
    },
  }),
  { name: 'FirebaseSignIn' }
)

export const FirebaseSignIn = (props: {}) => {
  const classes = useStyles(props)

  const { user, loading: userLoading } = useFirebaseAuth()

  // console.log('USER: ', user)
  // console.log('PHOTO: ', user?.photoURL)
  return (
    <div className={classes.root}>
      {!user ? (
        <SignIn />
      ) : (
        <div
          className={classes.userInfo}
          onClick={() => console.log(JSON.stringify(user, null, 2))}
        >
          Hello, {user?.displayName} &nbsp;
          <Avatar
            className={classes.avatar}
            alt={user?.displayName || undefined}
            src={user?.photoURL || undefined}
          />
          <div>
            <button onClick={() => signOut(auth)}>Sign Out</button>
          </div>
        </div>
      )}
    </div>
  )
}
