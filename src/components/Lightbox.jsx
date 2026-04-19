import { useState, useEffect, useCallback } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ stills, filmTitle }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  // Filter out null stills — only show real images
  const images = stills.filter(Boolean)

  const openAt = (i) => {
    setCurrent(i)
    setOpen(true)
  }

  const close = () => setOpen(false)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, prev, next])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Stills grid */}
      <div className={styles.grid}>
        {stills.map((src, i) => (
          <div
            key={i}
            className={styles.stillWrapper}
            onClick={() => src && openAt(images.indexOf(src))}
            style={{ cursor: src ? 'pointer' : 'default' }}
          >
            {src ? (
              <img
                src={src}
                alt={`Still ${i + 1} — ${filmTitle}`}
                className={styles.stillImg}
              />
            ) : (
              /* REPLACE WITH STILL IMAGES: update stills array in src/data/films.js */
              <div className={styles.stillPlaceholder} />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && images.length > 0 && (
        <div className={styles.overlay} onClick={close}>
          {/* Close button */}
          <button className={styles.closeBtn} onClick={close} aria-label="Fechar">
            ✕
          </button>

          {/* Counter */}
          <span className={styles.counter}>
            {current + 1} / {images.length}
          </span>

          {/* Image */}
          <div
            className={styles.imageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[current]}
              alt={`Still ${current + 1} — ${filmTitle}`}
              className={styles.lightboxImg}
            />
          </div>

          {/* Navigation — only show if more than 1 image */}
          {images.length > 1 && (
            <>
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Próximo"
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
