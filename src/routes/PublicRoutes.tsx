// https://github.com/DavidWells/next-with-react-router-v6

import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from './AuthRoutes'
import { LandingDemo } from 'templates/LandingDemo'

export const PublicRoutes = () => {
  console.log('PublicRoutes')

  return (
    <Routes>
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      <Route path="*" element={<LandingDemo />} />
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}
