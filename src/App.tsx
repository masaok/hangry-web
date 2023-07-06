import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'

import { AppContainer } from 'containers/AppContainer'

import { ReactOauthGoogleSimple } from 'examples/ReactOauthGoogleSimple'

import { HelloWorld } from 'templates/HelloWorld'
import { FirebaseSignIn } from 'examples/FirebaseSignIn'
import { AppRoutes } from 'routes/AppRoutes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="examples">
            <Route path="google" element={<ReactOauthGoogleSimple />} />
            <Route path="firebase" element={<FirebaseSignIn />} />
          </Route>
          <Route path="*" element={<AppRoutes />} />
          {/* <Route index element={<HelloWorld />} /> */}
          <Route index element={<Navigate to="/hello" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
