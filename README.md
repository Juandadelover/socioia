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
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Portafolio

Los proyectos se editan en `src/data/projects.js`:

- `featuredProject` es el caso destacado (CrédiControl).
- `projects` es el resto del portafolio, en el orden en que aparece.
- `url`: dominio público del proyecto. Mientras esté vacío no se muestra el botón "Ver proyecto en vivo".
- `shots`: capturas en `public/proyectos/<slug>/` (WebP, 1440 px de ancho en escritorio y 640 px en móvil).

Datos de contacto y enlaces en `src/data/site.js`.
