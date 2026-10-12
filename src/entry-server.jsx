import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { renderHead, routes, SITE_URL } from './seo/routes';

export { routes, SITE_URL };

export function render(route) {
  const html = renderToString(
    <StrictMode>
      <App path={route.path} />
    </StrictMode>,
  );
  return { html, head: renderHead(route) };
}
