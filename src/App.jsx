import './App.css'
import Navbar from './Pages/Navbar/Navbar.jsx'
import Hero from'./Pages/Hero/Hero';
import About from './Pages/About/About'
import Tracks from './Pages/Tracks/Tracks';
import Timeline from './Pages/Timeline/Timeline.jsx' 
import PreviousSponsors from './Pages/Sponsors/previousSponsors.jsx';
import Sponsors from './Pages/Sponsors/Sponsors.jsx';
import FAQ from './Pages/FAQ/faq.jsx'
import Footer from './Pages/Footer/Footer.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Hero />      
      <About/>
      <Tracks />
      <Timeline />
      <Sponsors />
      <PreviousSponsors />
      <FAQ/>
      <Footer />
    </>
  )
}

export default App
