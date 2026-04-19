import { Link } from 'react-router-dom'
import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>

        {/* Team photo */}
        <div className={styles.photoBlock}>
          <img
            src="/team/equipe.jpg"
            alt="Equipe pulp. no Cine Brasília"
            className={styles.teamPhoto}
          />
        </div>

        {/* Pull quote */}
        <blockquote className={styles.pullQuote}>
          "Do excesso de signos visuais do passado a um futuro transparente e
          desmaterializado, nossos filmes traduzem os elementos que
          simultaneamente perturbam e fascinam uma geração."
        </blockquote>

        {/* Body */}
        <div className={styles.body}>
          <p>
            A <strong>pulp.</strong> é um selo cinematográfico do Distrito Federal
            fundado sobre o conceito de "autor-parábola" — um coletivo dedicado a
            capturar e transmitir os sinais que o mundo emite, compreensíveis ou não.
          </p>
          <p>
            Existimos para ser uma antena sintonizada no zeitgeist de uma geração
            que navega num oceano de referências passadas, devorando
            intertextualidades e cuspindo-as em novas formas.
          </p>
        </div>

        {/* Contact CTA */}
        <div className={styles.cta}>
          <Link to="/contato" className={styles.ctaLink}>
            Entre em contato →
          </Link>
        </div>

      </div>
    </main>
  )
}
