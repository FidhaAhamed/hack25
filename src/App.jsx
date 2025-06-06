import Sponsors from './Sponsors';
import './App.css'
import Hero from'./Pages/Hero/Hero';
import About from './Pages/About/About'
import Tracks from './Pages/Tracks/Tracks';
import FAQ from './Pages/FAQ/faq.jsx'
import Footer from './Pages/Footer/Footer.jsx';

function App() {

  return (
    <>
      <Hero />
      <Tracks />
      <About/>
      <FAQ/>
      <Footer />
    </>
  )
}

export default App
