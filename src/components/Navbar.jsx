import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          {/* LOGO: wordmark */}
          <img src="/logos/logo-wordmark.png" alt="pulp." className={styles.logoImg} />
        </Link>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              end
            >
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
