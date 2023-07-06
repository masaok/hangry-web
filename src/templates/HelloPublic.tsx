import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'HelloPublic' }
)

export const HelloPublic = () => {
  const classes = useStyles()

  return <div className={classes.root}>HELLO PUBLIC</div>
}
