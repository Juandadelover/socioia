import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCase from './components/FeaturedCase';
import Projects from './components/Projects';
import Signals from './components/Signals';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import ScrollProgress from './components/ScrollProgress';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="contenido">
        <Hero />
        <FeaturedCase />
        <Projects />
        <Ticker />
        <Signals />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
