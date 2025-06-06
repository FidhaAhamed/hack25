import './App.css';
import Navbar from './Pages/Navbar/Navbar.jsx';

import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline';
import Tracks from './Pages/Tracks/Tracks';
import FAQ from './Pages/FAQ/faq.jsx';
import Sponsors from './Sponsors';
import Footer from './Pages/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <section id="home" className="relative min-h-screen">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="tracks">
        <Tracks />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <Footer />
    </div>
  );
}

export default App;
