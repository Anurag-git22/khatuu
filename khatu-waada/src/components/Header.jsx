import { useEffect, useState } from 'react'
import site from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          {site.name}
        </a>
        <button
          className={open ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="site-nav"
          className={open ? 'nav is-open' : 'nav'}
          aria-label="Primary"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="btn"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
