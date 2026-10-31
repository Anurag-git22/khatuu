import { useCallback, useEffect, useRef, useState } from 'react'
import site from '../data/siteData'
import CardScroller from './CardScroller'

export default function Gallery() {
  const images = site.gallery
  const [index, setIndex] = useState(null)
  const swipeRef = useRef(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const showPrev = useCallback(() => {
    setIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length))
  }, [images.length])
  const showNext = useCallback(() => {
    setIndex((current) => (current === null ? current : (current + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, showPrev, showNext])

  const onPointerDown = (event) => {
    if (event.target.closest('button')) {
      swipeRef.current = null
      return
    }
    swipeRef.current = event.clientX
  }

  const onPointerUp = (event) => {
    if (swipeRef.current == null) return
    const dx = event.clientX - swipeRef.current
    swipeRef.current = null
    if (dx > 40) showPrev()
    if (dx < -40) showNext()
  }

  const current = open ? images[index] : null

  return (
    <section id="gallery" className="band">
      <div className="container">
        <p className="kicker">Photographs</p>
        <h2 className="section-title">Gallery</h2>
        <p className="lede">{site.galleryIntro}</p>
        <CardScroller className="gallery-grid">
          {images.map((image, imageIndex) => (
            <button
              key={image.alt + imageIndex}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Open photograph: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </CardScroller>
      </div>

      {open && current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph"
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            swipeRef.current = null
          }}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <button type="button" className="lightbox-nav prev" onClick={showPrev} aria-label="Previous photograph">
            ‹
          </button>
          <img src={current.src} alt={current.alt} />
          <button type="button" className="lightbox-nav next" onClick={showNext} aria-label="Next photograph">
            ›
          </button>
        </div>
      ) : null}
    </section>
  )
}
