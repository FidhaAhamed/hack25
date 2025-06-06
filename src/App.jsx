import './App.css'
import Navbar from './Pages/Navbar/Navbar.jsx'
import Hero from'./Pages/Hero/Hero';
import About from './Pages/About/About'
import Tracks from './Pages/Tracks/Tracks';
import Timeline from './Pages/Timeline/Timeline.jsx' 
import Sponsors from './Sponsors';
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
      <FAQ/>
      <Footer />
    </>
  )
}

export default App
