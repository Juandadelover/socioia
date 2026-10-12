# SocioIA

Sitio web de SocioIA: desarrollo de software a la medida, web, apps e inteligencia artificial. Medellín y Valledupar, Colombia.

## Stack

- React 18 + Vite
- CSS Modules con tokens en OKLCH (`src/styles/global.css`)
- Fuentes autoalojadas: Bricolage Grotesque y Hanken Grotesk (Fontsource)
- React Hook Form para el formulario de contacto (abre WhatsApp con el mensaje armado)

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build + pre-renderizado de todas las páginas en dist/
npm run preview  # sirve el build
```

## Portafolio

Los proyectos se editan en `src/data/projects.js`:

- `featuredProject` es el caso destacado (CrédiControl).
- `projects` es el resto del portafolio, en el orden en que aparece.
- `url`: dominio público del proyecto. Mientras esté vacío no se muestra el botón "Ver proyecto en vivo".
- `shots`: capturas en `public/proyectos/<slug>/` (WebP, 1440 px de ancho en escritorio y 640 px en móvil).

Datos de contacto y enlaces en `src/data/site.js`.

## SEO

- `npm run build` compila el sitio y luego `scripts/prerender.mjs` genera un HTML completo por ruta
  (inicio, `/portafolio/<proyecto>` y `/servicios/<servicio>`), además de `sitemap.xml` y `robots.txt`.
- Rutas, títulos, descripciones y datos estructurados (JSON-LD) se definen en `src/seo/routes.js`.
- Dominio: `SITE_URL` en `src/seo/routes.js` (o la variable `VITE_SITE_URL`). Cambiarlo cuando se
  conecte un dominio propio para que canonical, Open Graph y sitemap apunten al dominio correcto.
- Servicios con página propia: `src/data/services.js`. Preguntas frecuentes: `src/data/faqs.js`.

Después de publicar:

1. Registrar el sitio en [Google Search Console](https://search.google.com/search-console) y enviar
   `https://<dominio>/sitemap.xml`.
2. Crear o reclamar el Perfil de Empresa en Google (Google Business Profile) para Medellín y Valledupar.
