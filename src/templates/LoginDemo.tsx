import { makeStyles } from '@material-ui/core/styles'
import { FirebaseSignIn } from 'examples/FirebaseSignIn'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'LoginDemo' }
)

export const LoginDemo = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      LoginDemo
      <FirebaseSignIn />
    </div>
  )
}
