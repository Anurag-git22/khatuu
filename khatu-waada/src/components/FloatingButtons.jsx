import { useEffect, useState } from 'react'
import site from '../data/siteData'

const whatsappNumber = site.phone.replace('+', '')

export default function FloatingButtons() {
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero || !('IntersectionObserver' in window)) {
      setHeroVisible(false)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.01 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`float-actions${heroVisible ? ' is-hero-visible' : ''}`} aria-label="Quick contact">
      <a className="float-call" href={`tel:${site.phone}`} aria-label="Call Khatu Waada">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M6.5 3.5 9 6.2l-1.6 1.6a12 12 0 0 0 8.8 8.8L18 15l2.7 2.5v3A2 2 0 0 1 18.8 23 17 17 0 0 1 1 5.2 2 2 0 0 1 3 3.5h3.5z" />
        </svg>
      </a>
      <a
        className="float-wa"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Khatu Waada"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2zm5.76 14.16c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.93-4.38-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.36.24-.27.64-.4 1.02-.4h.73c.23 0 .55-.09.86.66.32.77 1.08 2.65 1.18 2.84.1.2.16.42.03.68-.13.27-.2.43-.39.66-.2.23-.41.51-.59.69-.2.2-.4.41-.17.8.23.4 1.02 1.68 2.19 2.72 1.5 1.34 2.77 1.76 3.16 1.96.39.2.62.16.85-.1.23-.25.98-1.14 1.24-1.53.26-.4.52-.32.88-.2.36.13 2.28 1.08 2.67 1.27.39.2.65.29.74.45.1.16.1.94-.14 1.62z" />
        </svg>
      </a>
    </div>
  )
}
