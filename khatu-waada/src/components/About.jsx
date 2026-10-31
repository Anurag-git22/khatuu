import site from '../data/siteData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <Reveal>
          <img src={site.about.image} alt={site.about.alt} loading="lazy" decoding="async" />
        </Reveal>
        <Reveal>
          <p className="kicker">About</p>
          <h2 className="section-title">{site.about.title}</h2>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="stat-row">
            <div className="stat">
              <b>{site.rating}</b>
              <span>Google rating</span>
            </div>
            <div className="stat">
              <b>{site.reviewCount}</b>
              <span>Google reviews</span>
            </div>
            <div className="stat">
              <b>{site.address.postalCode}</b>
              <span>Umroli, Chiplun</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
