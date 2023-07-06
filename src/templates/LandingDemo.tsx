import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'LandingDemo' }
)

export const LandingDemo = () => {
  const classes = useStyles()

  return <div className={classes.root}>LandingDemo</div>
}
