import hero from '../assets/images/hero.jpg'
import interior from '../assets/images/interior.jpg'
import courtyard from '../assets/images/courtyard.jpg'
import g03 from '../assets/images/g03.jpg'
import g05 from '../assets/images/g05.jpg'
import g07 from '../assets/images/g07.jpg'
import g08 from '../assets/images/g08.jpg'
import g09 from '../assets/images/g09.jpg'
import g11 from '../assets/images/g11.jpg'
import g12 from '../assets/images/g12.jpg'
import g13 from '../assets/images/g13.jpg'
import g14 from '../assets/images/g14.jpg'

const site = {
  name: 'Khatu Waada',
  fullName: 'Khatu Waada – The Heritage Home',
  alternateName:
    'Khatu Waada - The Heritage Home | Best Resort In Chiplun | Best Resort In Guhagar',
  tagline: 'The Heritage Home – Chiplun | Guhagar',
  phone: '+917038335454',
  phoneDisplay: '+91 70383 35454',
  email: 'khatuwaada54@gmail.com',
  instagram: 'https://www.instagram.com/khatuwaada/',
  instagramHandle: '@khatuwaada',
  bookingUrl: 'https://khatuwaadatheheritagehome.bookmystay.io/',
  mapsQuery:
    'https://maps.google.com/maps?q=Khatu%20Waada%20The%20Heritage%20Home%20Umroli%20Chiplun&ll=17.48195,73.3865105&z=14&output=embed',
  mapsLink:
    'https://maps.google.com/?q=Khatu+Waada+The+Heritage+Home+Umroli+Chiplun&ll=17.48195,73.3865105',
  plusCode: 'F9JP+QJ',
  checkIn: '11:00',
  checkOut: '10:00',
  rating: '4.9',
  reviewCount: 111,
  geo: {
    latitude: 17.48195,
    longitude: 73.3865105,
  },
  address: {
    line1: 'Khatu Waada, Chiveli Phata, Umroli',
    line2: 'Chiplun–Guhagar Road, Maharashtra 415702',
    street: 'Khatu Waada, Chiveli Phata, Umroli, Chiplun–Guhagar Road',
    locality: 'Chiplun',
    region: 'Maharashtra',
    postalCode: '415702',
    country: 'IN',
  },
  nav: [
    { href: '#about', label: 'About' },
    { href: '#rooms', label: 'Rooms' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    image: hero,
    alt: 'Night view of the Khatu Waada heritage house in the rain, Chiplun, Konkan',
  },
  about: {
    image: g09,
    alt: 'Daytime view of the laterite wada building, garden and courtyard at Khatu Waada',
    title: 'A Konkan wada on the Chiplun–Guhagar road',
    paragraphs: [
      'Khatu Waada – The Heritage Home is a traditional Maharashtrian wada-style stay at Chiveli Phata, Umroli, on the Chiplun–Guhagar Road in Ratnagiri district. Guests come for a quiet stretch of Konkan, wooden interiors, and a house that still feels like a home.',
      'Meals are homemade Konkani and Maharashtrian food, prepared to order. The grounds hold a garden, an outdoor pool, and open sitting spaces, including a tree-top area mentioned by guests. Families and small groups often stay together here.',
      'The property is listed as a resort hotel on Google, with a 4.9 rating from 111 reviews. Check-in is from 11:00 in the morning; check-out is at 10:00.',
    ],
  },
  roomsIntro:
    'The listing and the property’s booking page describe traditional wada rooms, modern hut rooms, and a dormitory. Please call or write for current availability. Nightly rates on Google change with dates, so they are not shown here.',
  rooms: [
    {
      title: 'Traditional Waada rooms',
      image: g12,
      alt: 'Upper gallery of the traditional wada with wooden railings and laterite walls',
      description:
        'Rooms in the old wada, with wooden furniture, laterite and lime-plaster walls, and the feel of a Konkan house. AC and non-AC rooms are offered.',
    },
    {
      title: 'Modern hut rooms',
      image: g05,
      alt: 'Modern hut cottages beside the garden and outdoor swimming pool',
      description:
        'Separate hut-style rooms set around the garden and pool. Listed as air-conditioned, for a quieter stay a short walk from the main wada.',
    },
    {
      title: 'Dormitory',
      image: g11,
      alt: 'Open hall in the wada with traditional charpai cots and warli wall painting',
      description:
        'Shared non-AC accommodation with individual beds in the wada hall. Useful for groups who want to stay together under one roof.',
    },
  ],
  amenitiesIntro:
    'Taken from the Google listing. Please confirm any special need when you book.',
  amenities: [
    {
      icon: 'food',
      title: 'Home-style Konkani food',
      text: 'Homemade Konkani and Maharashtrian meals, with breakfast on selected plans.',
    },
    {
      icon: 'pool',
      title: 'Outdoor pool',
      text: 'A swimming pool on the grounds, with seating around the laterite courtyard.',
    },
    {
      icon: 'garden',
      title: 'Garden',
      text: 'Open lawn and planted edges around the wada, often noted in guest reviews.',
    },
    {
      icon: 'wifi',
      title: 'Free Wi-Fi',
      text: 'Wi-Fi is listed as free on the Google business profile.',
    },
    {
      icon: 'parking',
      title: 'Free parking',
      text: 'On-site parking for guests arriving by car on the Chiplun–Guhagar road.',
    },
    {
      icon: 'ac',
      title: 'Air-conditioned rooms',
      text: 'AC rooms are available in the wada and in the modern huts.',
    },
    {
      icon: 'family',
      title: 'Family & child friendly',
      text: 'Listed as child-friendly, and often chosen for family groups.',
    },
    {
      icon: 'pet',
      title: 'Pet-friendly',
      text: 'Pets are allowed, as noted on the Google listing. Please mention them when you call.',
    },
    {
      icon: 'service',
      title: 'Room service',
      text: 'Room service is listed among the property amenities.',
    },
    {
      icon: 'laundry',
      title: 'Laundry',
      text: 'Laundry service is listed on Google.',
    },
    {
      icon: 'accessible',
      title: 'Accessible',
      text: 'The listing marks the property as accessible. Ask about specific rooms before arrival.',
    },
    {
      icon: 'kitchen',
      title: 'Kitchen in some rooms',
      text: 'Kitchens are listed for some rooms. Confirm at the time of booking.',
    },
  ],
  galleryIntro:
    'Photographs from the Google listing of the wada, rooms, pool and garden.',
  gallery: [
    { src: hero, alt: 'Khatu Waada lit at night in the monsoon' },
    { src: g09, alt: 'Aerial view of the heritage wada and garden' },
    { src: g05, alt: 'Pool, lawn and hut cottages' },
    { src: g07, alt: 'Swimming pool with mural wall and laterite cottages' },
    { src: g11, alt: 'Wada hall with charpai cots' },
    { src: interior, alt: 'Wooden gallery inside the wada' },
    { src: g12, alt: 'Upper floor corridor of the wada' },
    { src: g03, alt: 'Bedroom with laterite bed and white walls' },
    { src: courtyard, alt: 'Simple wada bedroom with wooden chairs' },
    { src: g08, alt: 'Air-conditioned room with laterite bed' },
    { src: g13, alt: 'Sitting room with wooden sofas and tiled roof' },
    { src: g14, alt: 'Indoor wooden swing and rocking chair in the wada' },
  ],
  location: {
    title: 'Between Chiplun and Guhagar',
    paragraphs: [
      'Khatu Waada, Chiveli Phata, Umroli, Chiplun–Guhagar Road, Maharashtra 415702. Plus code F9JP+QJ, Umroli.',
      'The house sits on the road that links Chiplun town to the Guhagar coast, so beach and town are both a drive away rather than next door.',
    ],
    nearby: [
      { name: 'Guhagar Beach', distance: 'about 21 km' },
      { name: 'Shree Vyadeshwar Temple, Guhagar', distance: 'about 21 km' },
      { name: 'Velneshwar', distance: 'about 22 km' },
      { name: 'Chiplun Railway Station', distance: 'about 23 km' },
      { name: 'Parshuram Devasthan', distance: 'about 27 km' },
    ],
  },
  reviewsIntro:
    'Excerpts from Google reviews. The listing currently shows 4.9 from 111 reviews.',
  reviews: [
    {
      author: 'Vikram Desai',
      source: 'Google',
      rating: 5,
      text: 'We stayed at Khatu Wada for 2 nights and it was memorable stay. One can enjoy typical Waada culture with family members. It’s good for small as well as large groups. The food is made against order and they serve very authentic tasty food.',
    },
    {
      author: 'Ashish Naik',
      source: 'Google',
      rating: 5,
      text: 'Khatu Wada, Chiplun is truly one of the best recommendations for anyone looking to experience authentic Konkan hospitality. Perfectly located between Chiplun and Guhagar, this place offers a beautiful blend of heritage, peace, and…',
    },
    {
      author: 'Udit Narnawre',
      source: 'Google',
      rating: 5,
      text: 'We stayed at Khatu Wada and absolutely loved the experience. The place truly reflects authentic heritage vibes, making the stay feel unique and culturally rich. The food was delicious and well-prepared, adding to the overall charm of the…',
    },
  ],
  contactIntro: 'Write or call before you travel',
  formNote:
    'The form opens WhatsApp with your details. No account is created on this page.',
}

export default site
