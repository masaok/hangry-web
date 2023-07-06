import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { AppContainer } from 'containers/AppContainer'

import { ReactOauthGoogleSimple } from 'examples/ReactOauthGoogleSimple'

import { HelloWorld } from 'templates/HelloWorld'
import { FirebaseSignIn } from 'examples/FirebaseSignIn'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/" element={<AppContainer />}>
          <Route path="hello" element={<HelloWorld />} />

          <Route path="examples">
            <Route path="google" element={<ReactOauthGoogleSimple />} />
            <Route path="firebase" element={<FirebaseSignIn />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
