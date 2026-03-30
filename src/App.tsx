import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import Activities from './components/Activities'
import Reviews from './components/Reviews'
import Rules from './components/Rules'
import Directions from './components/Directions'
import Footer from './components/Footer'
import './index.css'

const FINN_URL = 'https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=344992734'

function App() {
  return (
    <div className="min-h-screen bg-[#0d1e0e] text-stone-100">
      <Hero finnUrl={FINN_URL} />
      <StatsBar />
      <About />
      <Gallery />
      <Amenities />
      <Rooms />
      <Activities />
      <Reviews />
      <Rules finnUrl={FINN_URL} />
      <Directions />
      <Footer finnUrl={FINN_URL} />
    </div>
  )
}

export default App
