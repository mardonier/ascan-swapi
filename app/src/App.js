import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './components/pages/Home'
import Users from './components/pages/Personagens'
import Contact from './components/pages/Contact'
import Planetas from './components/pages/Planetas'

import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/allusers" element={<Navigate to="/users" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planeta" element={<Planetas />} />
      </Routes>
    </Router>
  )
}

export default App
