import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

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
      <Outlet />
    </div>
  )
}
