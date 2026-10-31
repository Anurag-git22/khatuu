import site from '../data/siteData'
import CardScroller from './CardScroller'
import Reveal from './Reveal'

export default function Location() {
  return (
    <section id="location">
      <div className="container location-grid">
        <Reveal>
          <iframe
            className="map-frame"
            title="Map showing Khatu Waada at Umroli, Chiplun"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.mapsQuery}
          />
        </Reveal>
        <Reveal>
          <p className="kicker">Location</p>
          <h2 className="section-title">{site.location.title}</h2>
          {site.location.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <CardScroller as="ul" className="place-list">
            {site.location.nearby.map((place) => (
              <li key={place.name}>
                <b>{place.name}</b>
                <span>{place.distance}</span>
              </li>
            ))}
          </CardScroller>
        </Reveal>
      </div>
    </section>
  )
}
