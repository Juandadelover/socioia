export const PHONE = '3113678555';
export const EMAIL = 'aquilarjuan123@gmail.com';
export const INSTAGRAM = 'https://instagram.com/socioia.co';
export const LINKEDIN = 'https://linkedin.com/company/socioia';

export const whatsappLink = (message = 'Hola SocioIA, quiero hablar sobre un proyecto') =>
  `https://wa.me/57${PHONE}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Cómo trabajamos' },
  { href: '/#preguntas', label: 'Preguntas' },
];
