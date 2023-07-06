import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'HelloPrivate' }
)

export const HelloPrivate = () => {
  const classes = useStyles()

  return <div className={classes.root}>HELLO PRIVATE</div>
}
