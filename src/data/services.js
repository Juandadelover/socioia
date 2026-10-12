// Servicios de SocioIA. Cada uno tiene su propia página en /servicios/<slug>.
// `projects`: slugs de proyectos relacionados (ver src/data/projects.js).

export const services = [
  {
    slug: 'desarrollo-de-software-a-la-medida',
    name: 'Software a la medida',
    title: 'Desarrollo de software a la medida en Medellín y Valledupar',
    seoTitle: 'Desarrollo de software a la medida en Medellín y Valledupar | SocioIA',
    description:
      'Software a la medida para empresas en Colombia: sistemas de gestión, plataformas SaaS y paneles con roles, reportes y datos en tiempo real.',
    short:
      'Sistemas de gestión, plataformas SaaS y paneles administrativos hechos para cómo trabaja tu equipo, con roles, permisos y reportes.',
    tags: ['Sistemas internos', 'SaaS', 'Multiempresa'],
    intro: [
      'Cuando un negocio crece, el Excel compartido y el cuaderno dejan de alcanzar: la información queda repartida, nadie sabe cuál es la versión correcta y cada cierre toma horas. Un software a la medida ordena esa operación alrededor de cómo trabaja tu equipo, no al revés.',
      'En SocioIA diseñamos y programamos sistemas de gestión, plataformas SaaS y paneles administrativos para empresas de Medellín, Valledupar y el resto de Colombia. Entregamos por etapas, así empiezas a usar partes reales del sistema desde las primeras semanas.',
    ],
    includes: [
      'Levantamiento de procesos y diseño de la solución con tu equipo',
      'Roles y permisos por tipo de usuario (dueño, administrador, operativo)',
      'Paneles con indicadores y reportes exportables',
      'Versión web que funciona en computador y en celular',
      'Base de datos segura con respaldo y control de acceso por fila',
      'Capacitación y acompañamiento después del lanzamiento',
    ],
    projects: ['credicontrol', 'lumen', 'vasam'],
  },
  {
    slug: 'desarrollo-web-y-tiendas-en-linea',
    name: 'Desarrollo web y tiendas en línea',
    title: 'Desarrollo de páginas web y tiendas en línea en Colombia',
    seoTitle: 'Páginas web y tiendas en línea (e-commerce) en Medellín y Valledupar | SocioIA',
    description:
      'Páginas web y tiendas en línea para negocios en Colombia: catálogo, carrito, pagos, pedidos por WhatsApp y panel para administrar productos.',
    short:
      'Sitios de marca que cuentan tu historia y tiendas en línea con catálogo, carrito, pagos y panel para administrar pedidos.',
    tags: ['Sitios de marca', 'Tiendas en línea', 'Catálogos'],
    intro: [
      'Tu página web es la primera impresión de tu negocio y, bien hecha, también es un canal de ventas que trabaja a toda hora. Diseñamos sitios de marca con identidad propia y tiendas en línea pensadas para que el cliente encuentre, elija y compre sin fricción.',
      'Cada tienda incluye un panel para que tú mismo actualices productos, precios y disponibilidad, y gestiones los pedidos con el medio de pago o entrega que ya usa tu negocio: pago en línea, contraentrega, domicilio o pedido por WhatsApp.',
    ],
    includes: [
      'Diseño a la medida de tu marca, optimizado para celular',
      'Catálogo con categorías, búsqueda y variantes (tamaños, presentaciones)',
      'Carrito, checkout y pedidos con seguimiento',
      'Panel de administración de productos, pedidos y clientes',
      'Optimización para Google: velocidad, metadatos y datos estructurados',
      'Integración con WhatsApp, redes sociales y analítica',
    ],
    projects: ['vasam', 'tienda-did', 'la-felicida'],
  },
  {
    slug: 'desarrollo-de-apps-moviles',
    name: 'Apps móviles',
    title: 'Desarrollo de apps móviles para equipos en campo',
    seoTitle: 'Desarrollo de apps móviles en Medellín y Valledupar | SocioIA',
    description:
      'Apps móviles para equipos en la calle: rutas, cobros, registros y evidencias desde el celular, conectadas en tiempo real con la oficina.',
    short:
      'Aplicaciones para el equipo que trabaja en la calle: rutas, registros, cobros y evidencias desde el celular.',
    tags: ['Apps web progresivas', 'Android e iOS'],
    intro: [
      'Vendedores, cobradores, técnicos y domiciliarios necesitan herramientas que funcionen en el celular, rápido y sin complicaciones. Construimos apps que tu equipo instala en segundos y que envían la información a la oficina en el momento en que pasa.',
      'Según el caso, las construimos como aplicaciones web progresivas (PWA), que se instalan desde el navegador en Android y iPhone y se actualizan solas, o como aplicaciones móviles. En ambos casos comparten la misma base de datos que tu panel administrativo.',
    ],
    includes: [
      'Rutas y tareas del día para cada persona del equipo',
      'Registro de pagos, ventas o visitas con ubicación',
      'Comprobantes y notificaciones al cliente por WhatsApp',
      'Sincronización en tiempo real con el panel del dueño',
      'Diseño pensado para usar con una mano y en la calle',
      'Funciona en Android y iPhone',
    ],
    projects: ['credicontrol', 'tienda-did'],
  },
  {
    slug: 'inteligencia-artificial-para-empresas',
    name: 'Inteligencia artificial aplicada',
    title: 'Inteligencia artificial para empresas: asistentes y automatización',
    seoTitle: 'Inteligencia artificial para empresas en Colombia: asistentes y chatbots | SocioIA',
    description:
      'Inteligencia artificial para tu negocio: asistentes virtuales entrenados con tu información, automatización de tareas y análisis de datos.',
    short:
      'Asistentes entrenados con la información de tu negocio, automatización de tareas repetitivas y análisis de datos para decidir mejor.',
    tags: ['Asistentes con IA', 'Automatizaciones', 'Datos'],
    intro: [
      'La inteligencia artificial sirve de verdad cuando conoce tu negocio. Construimos asistentes que responden con tu catálogo, tus servicios y tus políticas reales, y automatizaciones que le quitan a tu equipo las tareas repetitivas.',
      'Un ejemplo es Loki, el asistente de VASAM Petshop: recomienda productos según la mascota, responde horarios y servicios a cualquier hora y pasa la conversación a una persona cuando hace falta. El equipo administra lo que Loki sabe y revisa las preguntas que no pudo responder.',
    ],
    includes: [
      'Asistentes virtuales para tu sitio web entrenados con tu información (RAG)',
      'Panel para administrar el conocimiento del asistente',
      'Registro de preguntas sin respuesta para mejorar continuamente',
      'Automatización de procesos: notificaciones, reportes y flujos con n8n',
      'Integración con tu software actual o como parte de uno nuevo',
      'Análisis de datos para decidir con información, no con intuición',
    ],
    projects: ['vasam', 'la-felicida'],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const servicePath = (s) => `/servicios/${s.slug}`;
