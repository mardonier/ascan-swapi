import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/personagens">Personagens</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/planetas">Planetas</Link>
        </li>
        <li>
          <Link to="/filmes">Filmes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
