import site from '../data/siteData'
import CardScroller from './CardScroller'
import Reveal from './Reveal'

export default function Rooms() {
  return (
    <section id="rooms" className="band">
      <div className="wrap">
        <p className="kicker">Stay</p>
        <h2 className="section-title">Rooms &amp; stay</h2>
        <p className="lede">{site.roomsIntro}</p>
        <CardScroller className="room-grid">
          {site.rooms.map((room) => (
            <Reveal as="article" className="room-card" key={room.title}>
              <img src={room.image} alt={room.alt} loading="lazy" decoding="async" />
              <div>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
              </div>
            </Reveal>
          ))}
        </CardScroller>
      </div>
    </section>
  )
}
