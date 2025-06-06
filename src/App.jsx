import './App.css';
import Navbar from './Pages/Navbar/Navbar.jsx';

import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline.jsx';
import FAQ from './Pages/FAQ/faq.jsx';
import Footer from './Pages/Footer/Footer.jsx';
import Sponsors from './Sponsors';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* NAVBAR ONLY INSIDE HERO */}
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="sessions">
        <FAQ />
      </section>

      <section id="sponsers">
        <Sponsors />
      </section>

      <Footer />
    </div>
  );
}

export default App;
