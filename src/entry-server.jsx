import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { renderHead, routes, SITE_URL } from './seo/routes';

export { routes, SITE_URL };
// Datos para generar llms.txt / llms-full.txt en el build.
export { allProjects, projectPath } from './data/projects';
export { services, servicePath } from './data/services';
export { FAQS } from './data/faqs';
export { PHONE, EMAIL, INSTAGRAM } from './data/site';

export function render(route) {
  const html = renderToString(
    <StrictMode>
      <App path={route.path} />
    </StrictMode>,
  );
  return { html, head: renderHead(route) };
}
