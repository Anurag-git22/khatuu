import site from '../data/siteData'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <img src={site.hero.image} alt={site.hero.alt} fetchPriority="high" decoding="async" />
      <div className="hero-veil" aria-hidden="true" />
      <div className="wrap hero-copy">
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
