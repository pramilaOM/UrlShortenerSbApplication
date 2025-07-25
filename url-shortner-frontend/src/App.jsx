
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { getApps } from './utils/helper'



function App() {

  const CurrentApp = getApps();

  return (
    <Router>
      <CurrentApp />
    </Router>
  )
}

export default App
