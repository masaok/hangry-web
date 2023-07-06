/**
 * https://www.npmjs.com/package/@react-oauth/google
 */
import { GoogleLogin } from '@react-oauth/google'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: theme.spacing(1),
    },

    title: {
      fontSize: 20,
    },
  }),
  { name: 'ReactOauthGoogleSimple' }
)

export const ReactOauthGoogleSimple = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div>
        <GoogleLogin
          useOneTap={true}
          // type="icon"
          onSuccess={credentialResponse => {
            console.log('CREDENTIAL RESPONSE: ', JSON.stringify(credentialResponse, null, 2))
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </div>
      <div className={classes.title}>Some Cool PWA App</div>
    </div>
  )
}
