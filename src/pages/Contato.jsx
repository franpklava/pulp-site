import styles from './Contato.module.css'

export default function Contato() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Contato</h1>
        <p className={styles.intro}>
          Para parcerias, festivais e projetos, entre em contato.
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.label}>E-mail</span>
            {/* REPLACE WITH OFFICIAL EMAIL */}
            <a href="mailto:contato@selopulp.com.br" className={styles.value}>
              contato@selopulp.com.br
            </a>
          </li>

          <li className={styles.item}>
            <span className={styles.label}>Instagram</span>
            {/* REPLACE WITH OFFICIAL INSTAGRAM HANDLE */}
            <a
              href="https://instagram.com/pulp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.value}
            >
              @pulp
            </a>
          </li>

          <li className={styles.item}>
            <span className={styles.label}>Localização</span>
            <span className={styles.value}>Brasília, Distrito Federal</span>
          </li>
        </ul>
      </div>
    </main>
  )
}
