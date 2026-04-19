import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          {/* LOGO: vertical */}
          <img src="/logos/logo-vertical.png" alt="pulp." className={styles.logoImg} />
        </div>

        <nav className={styles.col + ' ' + styles.colCenter}>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.navLink}>Filmes</Link></li>
            <li><Link to="/sobre" className={styles.navLink}>Sobre</Link></li>
            <li><Link to="/contato" className={styles.navLink}>Contato</Link></li>
          </ul>
        </nav>

        <div className={styles.col + ' ' + styles.colRight}>
          {/* REPLACE WITH OFFICIAL INSTAGRAM HANDLE */}
          <a
            href="https://instagram.com/pulp"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            @pulp
          </a>
          {/* REPLACE WITH OFFICIAL EMAIL */}
          <a href="mailto:contato@selopulp.com.br" className={styles.socialLink}>
            contato@selopulp.com.br
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 pulp. Todos os direitos reservados. Brasília, DF.</p>
      </div>
    </footer>
  )
}
