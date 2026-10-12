import Logo from './ui/Logo';
import { Instagram, Linkedin, WhatsApp } from './ui/icons';
import { INSTAGRAM, LINKEDIN, NAV_LINKS, whatsappLink } from '../data/site';
import { services, servicePath } from '../data/services';
import { allProjects, projectPath } from '../data/projects';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`wrap ${styles.top}`}>
      <div>
        <a href="/" aria-label="SocioIA, ir al inicio">
          <Logo className={styles.logo} showTagline />
        </a>
        <p className={styles.about}>
          Empresa de desarrollo de software a la medida, páginas web, tiendas en línea, apps móviles e
          inteligencia artificial en Medellín y Valledupar. Trabajamos con negocios de toda Colombia.
        </p>
        <ul className={styles.social}>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsApp />
            </a>
          </li>
          <li>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
      <nav aria-label="Servicios">
        <p className={styles.heading}>Servicios</p>
        <ul className={styles.links}>
          {services.map((s) => (
            <li key={s.slug}>
              <a href={servicePath(s)}>{s.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Portafolio">
        <p className={styles.heading}>Portafolio</p>
        <ul className={styles.links}>
          {allProjects.map((p) => (
            <li key={p.slug}>
              <a href={projectPath(p)}>{p.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="SocioIA">
        <p className={styles.heading}>SocioIA</p>
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={`wrap ${styles.bottom}`}>
      <p>© {new Date().getFullYear()} SocioIA · Desarrollo de software en Medellín y Valledupar, Colombia.</p>
    </div>
  </footer>
);

export default Footer;
