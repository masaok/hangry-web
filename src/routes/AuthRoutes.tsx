// https://github.com/DavidWells/next-with-react-router-v6

import { Route, Routes } from 'react-router-dom'

import { RegisterDemo } from 'templates/RegisterDemo'
import { LoginDemo } from 'templates/LoginDemo'
import { HelloPublic } from 'templates/HelloPublic'

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/auth" element={<RegisterDemo />} /> */}
      <Route index element={<HelloPublic />} />
      <Route path="" element={<HelloPublic />} />
      <Route path="*" element={<HelloPublic />} />
      <Route path="register" element={<RegisterDemo />} />
      <Route path="login" element={<LoginDemo />} />
    </Routes>
  )
}
