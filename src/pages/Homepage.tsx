import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()

  return <div className={classes.root}>Homepage</div>
}
