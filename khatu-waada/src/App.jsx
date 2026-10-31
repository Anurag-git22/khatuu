import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <div id="top">
          <Hero />
        </div>
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
