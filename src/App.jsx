
import './App.css';
import Navbar from './Pages/Navbar/Navbar.jsx';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline';
import Prizepool from './Pages/PrizePool/Prizepool.jsx';
import Tracks from './Pages/Tracks/Tracks';
import FAQ from './Pages/FAQ/faq.jsx';
import Sponsors from './Pages/Sponsors/Sponsors.jsx';
import Footer from './Pages/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizepool />
      <Tracks />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
