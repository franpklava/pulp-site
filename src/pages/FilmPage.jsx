import { useParams, Link, Navigate } from 'react-router-dom'
import { films } from '../data/films'
import styles from './FilmPage.module.css'

export default function FilmPage() {
  const { slug } = useParams()
  const film = films.find((f) => f.slug === slug)

  if (!film) return <Navigate to="/" replace />

  return (
    <main className={styles.main}>
      <div className={styles.inner}>

        {/* Back button */}
        <Link to="/" className={styles.back}>
          ← Voltar ao catálogo
        </Link>

        {/* Top section: poster + info */}
        <div className={styles.top}>
          <div className={styles.posterWrapper}>
            {film.posterSrc ? (
              <img
                src={film.posterSrc}
                alt={film.posterAlt}
                className={styles.posterImg}
              />
            ) : (
              /* REPLACE WITH POSTER IMAGE: update posterSrc in src/data/films.js */
              <div className={styles.posterPlaceholder}>
                <span className={styles.placeholderLabel}>{film.titleDisplay}</span>
              </div>
            )}
          </div>

          <div className={styles.topInfo}>
            {film.status && (
              <span className={styles.status}>{film.status}</span>
            )}
            <h1 className={styles.title}>{film.titleDisplay}</h1>
            <p className={styles.meta}>
              {film.year} · {film.format} · {film.duration}
            </p>
          </div>
        </div>

        {/* Sinopse */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Sinopse</h2>
          <p className={styles.sectionText}>{film.sinopse}</p>
        </section>

        {/* Ficha Técnica */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Ficha Técnica</h2>
          <dl className={styles.fichaTecnica}>
            {film.fichaTecnica.map((item, i) => (
              <div key={i} className={styles.fichaRow}>
                <dt className={styles.fichaRole}>{item.role}</dt>
                <dd className={styles.fichaName}>{item.name}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Circuito de Festivais — hidden if empty */}
        {film.festivais && film.festivais.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Circuito de Festivais</h2>
            <ul className={styles.festivais}>
              {film.festivais.map((f, i) => (
                <li key={i} className={styles.festivalItem}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Sobre o Diretor / Sobre a Diretora */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{film.directorLabel}</h2>
          <div className={styles.directorBlock}>
            <div className={styles.directorPhotoWrapper}>
              {film.directorPhotoSrc ? (
                <img
                  src={film.directorPhotoSrc}
                  alt={film.directorPhotoAlt}
                  className={styles.directorPhoto}
                />
              ) : (
                /* REPLACE WITH DIRECTOR PHOTO: update directorPhotoSrc in src/data/films.js */
                <div className={styles.directorPhotoPlaceholder}>
                  <span className={styles.directorInitials}>
                    {film.directorName
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.directorInfo}>
              <p className={styles.directorName}>{film.directorName}</p>
              <p className={styles.directorBio}>{film.directorBio}</p>
            </div>
          </div>
        </section>

        {/* Stills */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Stills</h2>
          <div className={styles.stillsGrid}>
            {film.stills.map((src, i) => (
              <div key={i} className={styles.stillWrapper}>
                {src ? (
                  <img
                    src={src}
                    alt={`Still ${i + 1} — ${film.titleDisplay}`}
                    className={styles.stillImg}
                  />
                ) : (
                  /* REPLACE WITH STILL IMAGES: update stills array in src/data/films.js */
                  <div className={styles.stillPlaceholder} />
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
