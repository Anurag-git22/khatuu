import {
  MdAcUnit,
  MdAccessible,
  MdFamilyRestroom,
  MdKitchen,
  MdLocalLaundryService,
  MdLocalParking,
  MdPets,
  MdPool,
  MdRestaurant,
  MdRoomService,
  MdWifi,
  MdYard,
} from 'react-icons/md'
import site from '../data/siteData'
import CardScroller from './CardScroller'
import Reveal from './Reveal'

const icons = {
  food: MdRestaurant,
  pool: MdPool,
  garden: MdYard,
  wifi: MdWifi,
  parking: MdLocalParking,
  ac: MdAcUnit,
  family: MdFamilyRestroom,
  pet: MdPets,
  service: MdRoomService,
  laundry: MdLocalLaundryService,
  accessible: MdAccessible,
  kitchen: MdKitchen,
}

export default function Amenities() {
  return (
    <section id="amenities">
      <div className="wrap">
        <p className="kicker">On the property</p>
        <h2 className="section-title">Amenities</h2>
        <p className="lede">{site.amenitiesIntro}</p>
        <CardScroller className="amenity-grid" compact>
          {site.amenities.map((item) => {
            const Icon = icons[item.icon]
            return (
              <Reveal className="amenity" key={item.title}>
                {Icon ? <Icon aria-hidden="true" /> : null}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            )
          })}
        </CardScroller>
      </div>
    </section>
  )
}
