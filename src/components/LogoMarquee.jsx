import { featuredProject, projects } from '../data/projects';
import styles from './LogoMarquee.module.css';

const ALL = [featuredProject, ...projects];

// Pasarela horizontal infinita con los logos de los proyectos. La lista se duplica
// para que el desplazamiento sea continuo; la copia queda oculta a lectores de pantalla.
const LogoMarquee = () => (
  <div className={styles.marquee}>
    <p className={styles.label}>Software en producción que construimos</p>
    <div className={styles.viewport}>
      <div className={styles.track}>
        {[0, 1, 2, 3].map((copy) => (
          <ul key={copy} className={styles.group} aria-hidden={copy > 0 ? 'true' : undefined}>
            {ALL.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className={styles.chip}
                  tabIndex={copy > 0 ? -1 : undefined}
                  aria-label={`Ver proyecto ${p.name}`}
                  style={p.logoScale ? { '--logo-scale': p.logoScale } : undefined}
                >
                  <img src={p.logo} alt="" decoding="async" />
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </div>
);

export default LogoMarquee;
