import site from '../data/siteData'
import { MdLocationOn } from 'react-icons/md'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <picture className="hero-media">
        <source media="(max-width: 599px)" srcSet={site.hero.mobileImage} />
        <img src={site.hero.image} alt={site.hero.alt} fetchpriority="high" decoding="async" />
      </picture>
      <div className="hero-veil" aria-hidden="true" />
      <div className="container hero-copy">
        <div className="hero-location">
          <MdLocationOn aria-hidden="true" />
          <span>Chiplun, Konkan</span>
        </div>
        <h1>{site.name}</h1>
        <p>{site.tagline}</p>
        <div className="hero-actions">
          <a className="btn" href={`tel:${site.phone}`}>
            Call
          </a>
          <a
            className="btn btn-ghost"
            href={`https://wa.me/${site.phone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
