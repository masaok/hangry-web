import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'App' }
)

export const HelloWorld = () => {
  const classes = useStyles()

  return <div className={classes.root}>HELLO WORLD</div>
}
