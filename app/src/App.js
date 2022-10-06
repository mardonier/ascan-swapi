import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

import Home from './components/pages/Home'
import Personagens from './components/pages/Personagens'
import Filmes from './components/pages/Filmes'
import Planetas from './components/pages/Planetas'
import Naves from './components/pages/Naves'

import Navbar from './components/Navbar'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/naves" element={<Naves />} />
      </Routes>
    </Router>
  )
}

export default App
