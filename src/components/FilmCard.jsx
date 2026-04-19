import { Link } from 'react-router-dom'
import styles from './FilmCard.module.css'

export default function FilmCard({ film }) {
  return (
    <Link to={`/filmes/${film.slug}`} className={styles.card}>
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
            <span className={styles.placeholderTitle}>{film.titleDisplay}</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{film.titleDisplay}</h3>
        <p className={styles.meta}>
          {film.year} · {film.format}
        </p>
      </div>
    </Link>
  )
}
