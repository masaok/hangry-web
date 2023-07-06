import { Outlet } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { GoogleOAuthProvider } from '@react-oauth/google'

import { GOOGLE_CLIENT_ID } from 'utils/constants'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
    },
  }),
  { name: 'AppContainer' }
)

export const AppContainer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Outlet />
      </GoogleOAuthProvider>
    </div>
  )
}
