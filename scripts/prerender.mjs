// Genera un HTML estático por ruta (con contenido y SEO completos), el sitemap y robots.txt.
// Se ejecuta después de `vite build` y `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, routes, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html debe contener <!--app-head--> y <!--app-html-->');
}

for (const route of routes) {
  const { html, head } = render(route);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  // /portafolio/lumen -> dist/portafolio/lumen.html (Vercel lo sirve sin extensión con cleanUrls).
  const out = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.path}.html`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log('prerender', route.path);
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : r.page === 'service' ? '0.9' : '0.8'}</priority>
  </url>`,
  )
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`sitemap.xml (${routes.length} URLs) y robots.txt para ${SITE_URL}`);
