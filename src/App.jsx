import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import useReveal from './hooks/useReveal';
import { findRoute } from './seo/routes';

// Cada ruta se pre-renderiza a HTML en el build (scripts/prerender.mjs) y luego se hidrata aquí.
function App({ path = '/' }) {
  useReveal();
  const route = findRoute(path);

  let page = <HomePage />;
  if (route?.page === 'project') page = <ProjectPage slug={route.slug} />;
  if (route?.page === 'service') page = <ServicePage slug={route.slug} />;

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="contenido">{page}</main>
      <Footer />
    </>
  );
}

export default App;
