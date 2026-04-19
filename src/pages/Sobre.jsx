import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>

        {/* Team photo */}
        <div className={styles.photoBlock}>
          {/* REPLACE WITH TEAM PHOTO: place file at /public/team/equipe-brasifilia.jpg
              Then replace the placeholder div below with:
              <img
                src="/team/equipe-brasifilia.jpg"
                alt="Equipe pulp. no Cine Brasília"
                className={styles.teamPhoto}
              />
          */}
          <div className={styles.photoPlaceholder}>
            <span className={styles.photoPlaceholderLabel}>
              foto da equipe no Cine Brasília
            </span>
          </div>
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
            Acreditamos que o cinema contemporâneo, ao se tornar excessivamente
            institucional, perdeu a conexão com o pulso cultural de sua época.
            Existimos para ser uma antena sintonizada no zeitgeist de uma geração
            que navega num oceano de referências passadas — devorando
            intertextualidades e cuspindo-as em novas formas.
          </p>
          <p>
            Em nossa hierarquia criativa, o filme e seu autor vêm sempre em
            primeiro lugar. A produtora é o suporte, não a estrela.
          </p>
        </div>

        {/* Contact CTA */}
        <div className={styles.cta}>
          <a href="/contato" className={styles.ctaLink}>
            Entre em contato →
          </a>
        </div>

      </div>
    </main>
  )
}
