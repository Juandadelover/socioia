// Portafolio de SocioIA. Las capturas viven en /public/proyectos/<slug>/.
// `url`: dominio público del proyecto. Si está vacío, no se muestra el botón "Ver proyecto en vivo".
// `logo`: logotipo en /public/logos/ (se muestra en el carrusel de proyectos).
// `device`: 'desktop' o 'mobile' (las capturas móviles se muestran dentro de un marco de celular).

const shot = (slug, file, label, device = 'desktop') => ({
  src: `/proyectos/${slug}/${file}.webp`,
  label,
  device,
});

export const featuredProject = {
  slug: 'vasam',
  logo: '/logos/vasam.webp',
  name: 'VASAM Petshop',
  url: 'https://www.vasampetshop.com',
  domain: 'vasampetshop.com',
  place: 'Valledupar',
  category: 'E-commerce · Estética canina · IA',
  headline: 'La tienda de mascotas de Valledupar, en línea y con su propio asistente de IA.',
  summary:
    'VASAM es una tienda de mascotas con peluquería canina y felina desde 2018. Necesitaba vender productos en línea y atender a sus clientes sin depender de responder mensajes uno a uno. Construimos su tienda completa, su panel de administración y a Loki, el asistente con inteligencia artificial que atiende a cada cliente.',
  pillars: [
    {
      title: 'Tienda en línea completa',
      text: 'Catálogo para perros y gatos con filtros, carrito, checkout con varios medios de pago y seguimiento del pedido para el cliente.',
    },
    {
      title: 'Estética canina y felina',
      text: 'Servicios de grooming presentados con fotos reales del trabajo, para que el cliente conozca el resultado y agende.',
    },
    {
      title: 'Panel de administración',
      text: 'Ventas, pedidos con verificación de pago, clientes, productos e inventario desde un solo lugar.',
    },
    {
      title: 'Loki aprende del negocio',
      text: 'El equipo administra lo que Loki sabe y revisa las preguntas que no pudo responder para completarlas.',
    },
  ],
  assistant: {
    name: 'Loki',
    title: 'Loki, el asistente con IA que atiende como alguien de la tienda.',
    text: 'Loki conoce el catálogo, los servicios y los horarios de VASAM. Recomienda productos según la mascota, responde dudas a cualquier hora y, cuando hace falta una persona, pasa la conversación a WhatsApp.',
    points: [
      'Responde con la información real del negocio, no con respuestas genéricas',
      'Recomienda productos según la especie, el tamaño y la edad de la mascota',
      'Enlaza directo a los productos de la tienda',
      'Atiende a toda hora y deriva a un asesor cuando el cliente lo pide',
    ],
    shots: [
      shot('vasam', 'loki-movil', 'Loki recomendando productos', 'mobile'),
      shot('vasam', 'loki-horarios-movil', 'Loki respondiendo horarios', 'mobile'),
    ],
  },
  stack: ['React', 'TypeScript', 'Supabase', 'Edge Functions', 'IA generativa (RAG)', 'Tailwind CSS'],
  shots: [
    shot('vasam', 'tienda', 'Tienda en línea'),
    shot('vasam', 'loki', 'Loki, asistente con IA'),
    shot('vasam', 'producto', 'Detalle de producto'),
    shot('vasam', 'tienda-movil', 'Tienda en el celular', 'mobile'),
    shot('vasam', 'servicios', 'Estética canina'),
    shot('vasam', 'admin', 'Panel de ventas'),
    shot('vasam', 'pedidos', 'Gestión de pedidos'),
  ],
};

export const projects = [
  {
    slug: 'credicontrol',
    logo: '/logos/credicontrol.svg',
    name: 'CrédiControl',
    url: '',
    place: 'Colombia',
    category: 'Plataforma SaaS · Fintech',
    headline: 'El cobro diario de un prestamista, sin cuaderno.',
    summary:
      'Los negocios de préstamos diarios llevan su cartera en cuadernos: rutas en papel, cuentas a mano y cero visibilidad de la mora. CrédiControl digitaliza toda la operación, desde que se presta hasta que se cierra la caja, para varias empresas en la misma plataforma.',
    features: [
      'Ruta del cobrador en el celular con registro de pagos y comprobante',
      'Cartera, recaudo y mora en tiempo real para el dueño',
      'Préstamos con cronograma automático y días de cobro configurables',
      'Cierre de caja, reportes y administración multiempresa',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL + RLS'],
    shots: [
      shot('credicontrol', 'dashboard', 'Panel del dueño'),
      shot('credicontrol', 'ruta-movil', 'Ruta del cobrador', 'mobile'),
      shot('credicontrol', 'prestamos', 'Cartera de préstamos'),
      shot('credicontrol', 'prestamo-detalle', 'Detalle y cronograma'),
      shot('credicontrol', 'reportes', 'Reportes'),
      shot('credicontrol', 'mora', 'Panel de mora'),
      shot('credicontrol', 'super-admin', 'Multiempresa'),
    ],
  },
  {
    slug: 'lumen',
    logo: '/logos/lumen.webp',
    name: 'LUMEN',
    url: '',
    place: 'Colombia',
    category: 'Software a la medida · Gestión',
    headline: 'La operación completa de una red de iglesias.',
    summary:
      'Iglesias con varias sedes coordinaban miembros, ministerios, eventos y formación entre hojas de cálculo y grupos de chat. LUMEN centraliza todo en una plataforma con permisos por rol para cada pastor, líder y servidor.',
    features: [
      'Iglesias, sedes, pastores y ministerios en una sola estructura',
      'Tareas con flujo de revisión y evidencias',
      'Eventos con presupuesto y calendario',
      'Aula virtual con cursos, módulos y evaluaciones',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL + RLS', 'Playwright'],
    shots: [
      shot('lumen', 'dashboard', 'Panel de la iglesia'),
      shot('lumen', 'tareas', 'Tablero de tareas'),
      shot('lumen', 'ministerios', 'Ministerios'),
      shot('lumen', 'miembros', 'Directorio de miembros'),
      shot('lumen', 'eventos', 'Eventos'),
    ],
  },
  {
    slug: 'la-felicida',
    logo: '/logos/la-felicida.webp',
    name: 'La Felicidá',
    url: '',
    place: 'Pueblo Bello, Sierra Nevada',
    category: 'Sitio de marca · E-commerce',
    headline: 'Café de origen, artesanía y turismo con identidad propia.',
    summary:
      'Una finca cafetera en la Sierra Nevada de Santa Marta vende café especial, mochilas artesanales y experiencias en la finca. Diseñamos un sitio que cuenta su historia y convierte visitas en pedidos y reservas.',
    features: [
      'Catálogo de cafés especiales y mochilas con carrito',
      'Experiencias turísticas con reserva',
      'Asistente de chat con IA conectado a automatizaciones',
      'Preparado para varios idiomas',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'n8n'],
    shots: [
      shot('la-felicida', 'inicio', 'Inicio'),
      shot('la-felicida', 'cafe', 'Café de origen'),
      shot('la-felicida', 'ediciones', 'Ediciones especiales'),
      shot('la-felicida', 'mochilas', 'Mochilas con pensamiento'),
      shot('la-felicida', 'inicio-movil', 'Versión móvil', 'mobile'),
    ],
  },
  {
    slug: 'tienda-did',
    logo: '/logos/tienda-did.svg',
    name: 'Tienda DID',
    url: '',
    place: 'Bosconia, Cesar',
    category: 'E-commerce local',
    headline: 'La tienda del barrio, abierta en línea.',
    summary:
      'Una tienda de barrio recibía pedidos desordenados por chat. Ahora sus clientes eligen productos y presentaciones desde el celular y envían un pedido completo, con domicilio o recogida en tienda.',
    features: [
      'Catálogo por categorías con búsqueda instantánea',
      'Presentaciones y precios por producto',
      'Carrito que se guarda y pedido listo para enviar',
      'Panel para actualizar productos y disponibilidad',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase'],
    shots: [
      shot('tienda-did', 'catalogo', 'Catálogo'),
      shot('tienda-did', 'inicio-movil', 'En el celular', 'mobile'),
      shot('tienda-did', 'admin', 'Panel de administración'),
      shot('tienda-did', 'productos', 'Gestión de productos'),
    ],
  },
];
