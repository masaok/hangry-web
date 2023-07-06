import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { AppContainer } from 'containers/AppContainer'

import { HelloWorld } from 'templates/HelloWorld'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/" element={<AppContainer />}>
          <Route path="hello" element={<HelloWorld />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
