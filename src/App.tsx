import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'

import { AppContainer } from 'containers/AppContainer'

import { ReactOauthGoogleSimple } from 'examples/ReactOauthGoogleSimple'

import { HelloWorld } from 'templates/HelloWorld'
import { FirebaseSignIn } from 'examples/FirebaseSignIn'
import { AppRoutes } from 'routes/AppRoutes'
import { LandingDemo } from 'templates/LandingDemo'
import { Homepage } from 'pages/Homepage'

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

          {/* Protected and Public Routes start here */}
          <Route path="*" element={<AppRoutes />} />

          {/* Landing page goes here -- should be in Public Routes, but whatever, it works */}
          <Route index element={<Homepage />} />
          {/* <Route index element={<HelloWorld />} /> */}
          {/* <Route index element={<Navigate to="/hello" />} /> */}
          {/* <Route index element={<LandingDemo />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
