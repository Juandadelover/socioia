import { ArrowRight } from './ui/icons';
import { serviceBySlug, servicePath } from '../data/services';
import styles from './Services.module.css';

// `page`: slug de la página del servicio (src/data/services.js), si tiene una.
const pageFor = (item) => (item.page ? serviceBySlug[item.page] : null);

const SERVICES = [
  {
    title: 'Software a la medida',
    page: 'desarrollo-de-software-a-la-medida',
    text: 'Sistemas de gestión, plataformas SaaS y paneles administrativos hechos para cómo trabaja tu equipo, con roles, permisos y reportes.',
    tags: ['Sistemas internos', 'SaaS', 'Multiempresa'],
  },
  {
    title: 'Desarrollo web y e-commerce',
    page: 'desarrollo-web-y-tiendas-en-linea',
    text: 'Sitios de marca que cuentan tu historia y tiendas en línea con catálogo, carrito, pagos y panel para administrar pedidos.',
    tags: ['Sitios de marca', 'Tiendas en línea', 'Catálogos'],
  },
  {
    title: 'Apps móviles',
    page: 'desarrollo-de-apps-moviles',
    text: 'Aplicaciones para el equipo que trabaja en la calle: rutas, registros, cobros y evidencias desde el celular.',
    tags: ['Apps web progresivas', 'Android e iOS'],
  },
  {
    title: 'Inteligencia artificial aplicada',
    page: 'inteligencia-artificial-para-empresas',
    text: 'Asistentes entrenados con la información de tu negocio, automatización de tareas repetitivas y análisis de datos para decidir mejor.',
    tags: ['Asistentes con IA', 'Automatizaciones', 'Datos'],
  },
  {
    title: 'Marketing digital con IA',
    text: 'Estrategia, contenido y campañas apoyadas en IA para que la gente correcta encuentre lo que construimos.',
    tags: ['Contenido', 'Campañas', 'Analítica'],
  },
];

const Services = () => (
  <section id="servicios" className="section" aria-labelledby="servicios-title">
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.head} data-reveal>
        <p className="kicker">Servicios</p>
        <h2 id="servicios-title">Servicios de desarrollo de software, web, apps e IA.</h2>
        <p>
          Un mismo equipo diseña, programa y acompaña. Empezamos por entender tu operación y
          terminamos con software que tu gente usa todos los días.
        </p>
      </div>
      <ol className={styles.list}>
        {SERVICES.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
            <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
            <div className={styles.body}>
              <h3>
                {pageFor(s) ? <a href={servicePath(pageFor(s))}>{s.title}</a> : s.title}
              </h3>
              <p>{s.text}</p>
              {pageFor(s) && (
                <a className={styles.more} href={servicePath(pageFor(s))} aria-hidden="true" tabIndex={-1}>
                  Ver servicio
                  <ArrowRight />
                </a>
              )}
            </div>
            <ul className={styles.tags}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Services;
