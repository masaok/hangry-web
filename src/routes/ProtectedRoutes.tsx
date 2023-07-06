// https://github.com/DavidWells/next-with-react-router-v6

import { Navigate, Route, Routes } from 'react-router-dom'

import { AppContainer } from 'containers/AppContainer'
import { HelloPrivate } from 'templates/HelloPrivate'
import { LandingDemo } from 'templates/LandingDemo'

export const ProtectedRoutes = (props: any) => {
  return (
    <Routes>
      <Route path="dashboard" element={<HelloPrivate />} />
      {/* <Route path="/" element={<LandingDemo />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
