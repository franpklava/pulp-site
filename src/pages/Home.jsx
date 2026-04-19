import { useState } from 'react'
import FilmCard from '../components/FilmCard'
import { films } from '../data/films'
import styles from './Home.module.css'

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'longa', label: 'Longas' },
  { key: 'curta', label: 'Curtas' },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filtered =
    activeFilter === 'todos'
      ? films
      : films.filter((f) => f.formatKey === activeFilter)

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        {/* LOGO: vertical (antena + pulp.) */}
        <img
          src="/logos/logo-vertical.png"
          alt="pulp."
          className={styles.heroLogo}
        />
        <p className={styles.heroTagline}>Um selo cinematográfico do Distrito Federal.</p>
      </section>

      {/* Catalog */}
      <section className={styles.catalog}>
        {/* Filters */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={
                activeFilter === f.key
                  ? `${styles.filterBtn} ${styles.filterActive}`
                  : styles.filterBtn
              }
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </section>
    </main>
  )
}
