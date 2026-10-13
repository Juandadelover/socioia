// Genera un HTML estático por ruta (con contenido y SEO completos), el sitemap y robots.txt.
// Se ejecuta después de `vite build` y `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const ssr = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { render, routes, SITE_URL } = ssr;

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html debe contener <!--app-head--> y <!--app-html-->');
}

for (const route of routes) {
  const { html, head } = render(route);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  // /portafolio/lumen -> dist/portafolio/lumen.html (vercel.json reescribe la URL sin extensión a este archivo).
  const out = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.path}.html`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log('prerender', route.path);
}

const today = new Date().toISOString().slice(0, 10);
const xml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// sitemap.xml con imágenes (las capturas de cada página aparecen en Google Imágenes).
const urls = routes
  .map((r) => {
    const imgs = (r.images || [])
      .map((i) => `    <image:image>\n      <image:loc>${SITE_URL}${xml(i.src)}</image:loc>\n      <image:title>${xml(i.title)}</image:title>\n    </image:image>`)
      .join('\n');
    return `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : r.page === 'service' ? '0.9' : '0.8'}</priority>${imgs ? `\n${imgs}` : ''}
  </url>`;
  })
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
);

// robots.txt: todo el sitio abierto a buscadores y a los rastreadores de asistentes de IA.
const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot'];
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\n# Asistentes de IA: permitidos (resumen del sitio en /llms.txt)\n${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

// llms.txt (https://llmstxt.org): resumen en Markdown para que los asistentes de IA entiendan el sitio.
const { allProjects, projectPath, services, servicePath, FAQS, PHONE, EMAIL, INSTAGRAM } = ssr;
const intro = `# SocioIA

> SocioIA es una empresa colombiana de desarrollo de software con presencia en Medellín y Valledupar. Diseña y desarrolla software a la medida, páginas web, tiendas en línea, apps móviles y asistentes con inteligencia artificial para negocios de toda Colombia. Lema: "Tecnología que trabaja por ti".

- Ubicación: Medellín (Antioquia) y Valledupar (Cesar), Colombia. Atiende negocios de todo el país de forma remota.
- Contacto: WhatsApp +57 ${PHONE} (https://wa.me/57${PHONE}), correo ${EMAIL}, Instagram ${INSTAGRAM}.
- Cotización: cada proyecto se cotiza según su alcance, con una propuesta por escrito (alcance, tiempos y valor).`;

const llms = `${intro}

## Servicios

${services.map((s) => `- [${s.name}](${SITE_URL}${servicePath(s)}): ${s.description}`).join('\n')}

## Portafolio (proyectos reales)

${allProjects.map((p) => `- [${p.name}](${SITE_URL}${projectPath(p)}): ${p.headline} ${p.category}, ${p.place}.`).join('\n')}

## Más información

- [Preguntas frecuentes](${SITE_URL}/#preguntas)
- [Cómo trabajamos](${SITE_URL}/#proceso)
- [Versión completa para IA](${SITE_URL}/llms-full.txt)
`;
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);

const full = `${intro}

## Servicios

${services
  .map(
    (s) => `### ${s.title}

URL: ${SITE_URL}${servicePath(s)}

${s.intro.join('\n\n')}

Qué incluye:
${s.includes.map((i) => `- ${i}`).join('\n')}
`,
  )
  .join('\n')}
## Portafolio

${allProjects
  .map((p) => {
    const built = p.pillars ? p.pillars.map((x) => `- ${x.title}: ${x.text}`) : p.features.map((f) => `- ${f}`);
    return `### ${p.name}

URL del caso: ${SITE_URL}${projectPath(p)}${p.url ? `\nSitio en vivo: ${p.url}` : ''}
Categoría: ${p.category}. Ubicación: ${p.place}.

${p.headline}

${p.summary}

Qué se construyó:
${built.join('\n')}
${p.assistant ? `\n${p.assistant.title}\n\n${p.assistant.text}\n${p.assistant.points.map((x) => `- ${x}`).join('\n')}\n` : ''}
Tecnologías: ${p.stack.join(', ')}.
`;
  })
  .join('\n')}
## Preguntas frecuentes

${FAQS.map((f) => `### ${f.q}\n\n${f.a}\n`).join('\n')}`;
fs.writeFileSync(path.join(dist, 'llms-full.txt'), full);

console.log(`sitemap.xml (${routes.length} URLs), robots.txt, llms.txt y llms-full.txt para ${SITE_URL}`);
