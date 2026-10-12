import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { findRoute } from './seo/routes';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/hanken-grotesk';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// En producción el HTML viene pre-renderizado: se hidrata. En desarrollo se monta desde cero.
if (container.hasChildNodes()) hydrateRoot(container, app);
else {
  const route = findRoute(window.location.pathname);
  if (route) document.title = route.title;
  createRoot(container).render(app);
}
