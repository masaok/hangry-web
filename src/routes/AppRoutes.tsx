// https://github.com/DavidWells/next-with-react-router-v6#route-switcher

import { useFirebaseAuth } from 'services/hooks/useFirebaseAuth'
import { lazyImport } from 'utils/importing'

const { ProtectedRoutes } = lazyImport(() => import('./ProtectedRoutes'), 'ProtectedRoutes')
const { PublicRoutes } = lazyImport(() => import('./PublicRoutes'), 'PublicRoutes')

export const AppRoutes = () => {
  console.log('AppRoutes')

  // const auth = useAuth()
  const { user, loading, userProfile } = useFirebaseAuth()

  console.log('USER: ', user)
  console.log('USER PROFILE: ', userProfile)
  console.log('USER LOADING: ', loading)

  return loading ? (
    <div>AppRoutes &gt; Loading</div>
  ) : user ? (
    <ProtectedRoutes user={user} loading={loading} />
  ) : (
    <PublicRoutes />
  )
}
