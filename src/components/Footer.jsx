import Logo from './ui/Logo';
import { Instagram, Linkedin, WhatsApp } from './ui/icons';
import { INSTAGRAM, LINKEDIN, NAV_LINKS, whatsappLink } from '../data/site';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`wrap ${styles.top}`}>
      <div>
        <Logo className={styles.logo} showTagline />
        <p className={styles.about}>
          Desarrollo de software, web, apps e inteligencia artificial para negocios en Colombia.
        </p>
      </div>
      <nav aria-label="Pie de página">
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
    <div className={`wrap ${styles.bottom}`}>
      <p>© {new Date().getFullYear()} SocioIA. Medellín y Valledupar, Colombia.</p>
    </div>
  </footer>
);

export default Footer;
