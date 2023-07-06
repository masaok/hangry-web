import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'RegisterDemo' }
)

export const RegisterDemo = () => {
  const classes = useStyles()

  return <div className={classes.root}>RegisterDemo</div>
}
