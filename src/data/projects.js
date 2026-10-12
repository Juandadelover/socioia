// Portafolio de SocioIA. Las capturas viven en /public/proyectos/<slug>/.
// `url`: dominio público del proyecto. Si está vacío, no se muestra el botón "Ver proyecto en vivo".
// `device`: 'desktop' o 'mobile' (las capturas móviles se muestran dentro de un marco de celular).

const shot = (slug, file, label, device = 'desktop') => ({
  src: `/proyectos/${slug}/${file}.webp`,
  label,
  device,
});

export const featuredProject = {
  slug: 'credicontrol',
  name: 'CrédiControl',
  url: '',
  category: 'Plataforma SaaS · Fintech',
  headline: 'El cobro diario de un prestamista, sin cuaderno.',
  summary:
    'Los negocios de préstamos diarios en Colombia llevan su cartera en cuadernos: rutas en papel, cuentas a mano al final del día y cero visibilidad de la mora. Construimos CrédiControl, una plataforma multiempresa que digitaliza toda la operación, desde que se presta hasta que se cierra la caja.',
  pillars: [
    {
      title: 'Ruta del cobrador en el celular',
      text: 'Cada cobrador ve sus cobros del día, registra pagos en efectivo, Nequi o transferencia y envía el comprobante al cliente por WhatsApp.',
    },
    {
      title: 'Cartera y mora en tiempo real',
      text: 'El dueño ve recaudo, cartera activa, clientes en mora y avance de cada ruta mientras ocurre, no al final de la semana.',
    },
    {
      title: 'Préstamos con cronograma automático',
      text: 'Cuota fija, solo interés o sobre saldo, con días de cobro configurables y su cronograma generado al instante.',
    },
    {
      title: 'Caja, reportes y multiempresa',
      text: 'Cierre de caja por cobrador, reportes exportables y un panel de administración para gestionar varias empresas en la misma plataforma.',
    },
  ],
  stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL + RLS', 'Tailwind CSS'],
  shots: [
    shot('credicontrol', 'dashboard', 'Panel del dueño'),
    shot('credicontrol', 'ruta-movil', 'Ruta del cobrador', 'mobile'),
    shot('credicontrol', 'prestamos', 'Cartera de préstamos'),
    shot('credicontrol', 'prestamo-detalle', 'Detalle y cronograma'),
    shot('credicontrol', 'cobrador-movil', 'Inicio del cobrador', 'mobile'),
    shot('credicontrol', 'reportes', 'Reportes'),
    shot('credicontrol', 'mora', 'Panel de mora'),
    shot('credicontrol', 'caja', 'Caja diaria'),
    shot('credicontrol', 'super-admin', 'Administración multiempresa'),
  ],
};

export const projects = [
  {
    slug: 'vasam',
    name: 'VASAM Petshop',
    url: '',
    place: 'Valledupar',
    category: 'E-commerce · Servicios',
    headline: 'Tienda en línea y estética canina en un mismo lugar.',
    summary:
      'Una tienda de mascotas con peluquería necesitaba vender productos y llenar su agenda de grooming sin depender de los mensajes uno a uno. Le construimos su tienda en línea con panel de administración y un asistente con IA que recomienda productos.',
    features: [
      'Catálogo para perros y gatos con carrito y checkout',
      'Seguimiento de pedidos para el cliente',
      'Asistente con IA entrenado con el catálogo y los servicios',
      'Panel admin: pedidos, clientes, productos y métricas de venta',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Edge Functions', 'IA (RAG)'],
    shots: [
      shot('vasam', 'tienda', 'Tienda'),
      shot('vasam', 'producto', 'Detalle de producto'),
      shot('vasam', 'admin', 'Panel de ventas'),
      shot('vasam', 'pedidos', 'Gestión de pedidos'),
      shot('vasam', 'tienda-movil', 'Tienda en el celular', 'mobile'),
    ],
  },
  {
    slug: 'lumen',
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
