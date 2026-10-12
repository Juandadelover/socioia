// Rutas del sitio con su SEO (título, descripción, canonical, Open Graph y JSON-LD).
// Se usan en el build para generar un HTML pre-renderizado por página y el sitemap.
import { allProjects, projectPath, projectBySlug } from '../data/projects';
import { services, servicePath } from '../data/services';
import { FAQS } from '../data/faqs';
import { EMAIL, INSTAGRAM, LINKEDIN, PHONE } from '../data/site';

// Dominio público. Cambiar aquí (o con VITE_SITE_URL) cuando se conecte un dominio propio.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://socioiasoft.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'SocioIA';
const OG_IMAGE = '/og-image.jpg';
const abs = (path) => `${SITE_URL}${path}`;

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: abs('/logo-socioia.png'),
  image: abs(OG_IMAGE),
  slogan: 'Tecnología que trabaja por ti',
  description:
    'Empresa de desarrollo de software a la medida, páginas web, tiendas en línea, apps móviles e inteligencia artificial en Medellín y Valledupar, Colombia.',
  email: EMAIL,
  telephone: `+57${PHONE}`,
  areaServed: { '@type': 'Country', name: 'Colombia' },
  sameAs: [INSTAGRAM, LINKEDIN],
  knowsAbout: [
    'Desarrollo de software a la medida',
    'Desarrollo web',
    'Comercio electrónico',
    'Aplicaciones móviles',
    'Inteligencia artificial',
    'Chatbots',
    'Automatización de procesos',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de SocioIA',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: abs(servicePath(s)) },
    })),
  },
};

const locations = [
  { city: 'Medellín', region: 'Antioquia', id: 'medellin' },
  { city: 'Valledupar', region: 'Cesar', id: 'valledupar' },
].map((l) => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#${l.id}`,
  name: `${SITE_NAME} ${l.city}`,
  description: `Desarrollo de software, páginas web, apps e inteligencia artificial en ${l.city}.`,
  url: `${SITE_URL}/`,
  image: abs(OG_IMAGE),
  telephone: `+57${PHONE}`,
  email: EMAIL,
  parentOrganization: { '@id': ORG_ID },
  address: { '@type': 'PostalAddress', addressLocality: l.city, addressRegion: l.region, addressCountry: 'CO' },
  areaServed: [
    { '@type': 'City', name: l.city },
    { '@type': 'Country', name: 'Colombia' },
  ],
}));

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'es-CO',
  publisher: { '@id': ORG_ID },
};

const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

const webPage = (path, title, description) => ({
  '@type': 'WebPage',
  '@id': `${abs(path)}#webpage`,
  url: abs(path),
  name: title,
  description,
  inLanguage: 'es-CO',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': ORG_ID },
});

const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes });

const home = {
  path: '/',
  page: 'home',
  title: 'Desarrollo de software, apps e IA en Medellín y Valledupar | SocioIA',
  description:
    'Desarrollo de software a la medida en Medellín y Valledupar: páginas web, tiendas en línea, apps y asistentes con IA. Conoce nuestros proyectos reales.',
};
home.preload = {
  href: '/proyectos/vasam/tienda.webp',
  srcset: '/proyectos/vasam/tienda.webp 1440w, /proyectos/vasam/tienda@2x.webp 2400w',
  sizes: '(min-width: 960px) 600px, 100vw',
};
home.jsonLd = graph(
  organization,
  ...locations,
  website,
  webPage(home.path, home.title, home.description),
  {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@type': 'ItemList',
    name: 'Portafolio de proyectos de SocioIA',
    itemListElement: allProjects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(projectPath(p)),
      name: p.name,
    })),
  },
);

const projectRoutes = allProjects.map((p) => {
  const path = projectPath(p);
  const title = `${p.name} | Caso de estudio de ${p.category.split(' · ')[0]} | SocioIA`;
  const full = `${p.headline} Caso de estudio de SocioIA con funcionalidades, tecnologías y capturas reales.`;
  const description = full.length > 160 ? `${p.headline} Caso de estudio de SocioIA.` : full;
  const cover = p.shots.find((s) => s.device === 'desktop');
  return {
    path,
    page: 'project',
    slug: p.page,
    title,
    description,
    image: `/og/${p.page}.jpg`,
    jsonLd: graph(
      organization,
      webPage(path, title, description),
      {
        '@type': 'CreativeWork',
        '@id': `${abs(path)}#caso`,
        name: p.name,
        headline: p.headline,
        description: p.summary,
        url: abs(path),
        image: abs(cover.src.replace('.webp', '@2x.webp')),
        creator: { '@id': ORG_ID },
        inLanguage: 'es-CO',
        keywords: [p.category, ...p.stack].join(', '),
        ...(p.url ? { sameAs: p.url } : {}),
      },
      breadcrumb([
        { name: 'Inicio', path: '/' },
        { name: 'Portafolio', path: '/#proyectos' },
        { name: p.name, path },
      ]),
    ),
  };
});

const serviceRoutes = services.map((s) => {
  const path = servicePath(s);
  return {
    path,
    page: 'service',
    slug: s.slug,
    title: s.seoTitle,
    description: s.description,
    jsonLd: graph(
      organization,
      ...locations,
      webPage(path, s.seoTitle, s.description),
      {
        '@type': 'Service',
        '@id': `${abs(path)}#servicio`,
        name: s.name,
        serviceType: s.name,
        description: s.description,
        url: abs(path),
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'City', name: 'Medellín' },
          { '@type': 'City', name: 'Valledupar' },
          { '@type': 'Country', name: 'Colombia' },
        ],
        isRelatedTo: s.projects
          .map((slug) => projectBySlug[slug])
          .filter(Boolean)
          .map((p) => ({ '@type': 'CreativeWork', name: p.name, url: abs(projectPath(p)) })),
      },
      breadcrumb([
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/#servicios' },
        { name: s.name, path },
      ]),
    ),
  };
});

export const routes = [home, ...projectRoutes, ...serviceRoutes];

export const findRoute = (pathname) => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === clean) || null;
};

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Etiquetas <head> de una ruta (título, descripción, canonical, Open Graph, Twitter y JSON-LD).
export const renderHead = (route) => {
  const url = abs(route.path);
  const image = abs(route.image || OG_IMAGE);
  const json = JSON.stringify(route.jsonLd).replace(/</g, '\\u003c');
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="alternate" hreflang="es-CO" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(route.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    route.preload
      ? `<link rel="preload" as="image" href="${route.preload.href}" imagesrcset="${route.preload.srcset}" imagesizes="${route.preload.sizes}" fetchpriority="high" />`
      : '',
    `<script type="application/ld+json">${json}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
};
