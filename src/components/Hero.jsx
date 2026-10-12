import { BrowserFrame, PhoneFrame } from './ui/Frames';
import { ArrowRight, Pin, WhatsApp } from './ui/icons';
import LogoMarquee from './LogoMarquee';
import { featuredProject as p } from '../data/projects';
import { whatsappLink } from '../data/site';
import styles from './Hero.module.css';

const desktopShot = p.shots.find((s) => s.device === 'desktop');
const lokiShot = p.assistant.shots[0];

const Hero = () => (
  <section id="inicio" className={styles.hero}>
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.copy}>
        <p className={`${styles.place} ${styles.in}`} style={{ '--d': '0ms' }}>
          <Pin aria-hidden="true" />
          Medellín y Valledupar, Colombia
        </p>
        <h1 className={styles.title}>
          <span className={`${styles.line} ${styles.in}`} style={{ '--d': '80ms' }}>
            Tecnología que
          </span>
          <span className={`${styles.accent} ${styles.in}`} style={{ '--d': '200ms' }}>
            trabaja por ti.
          </span>
        </h1>
        <p className={`${styles.lead} ${styles.in}`} style={{ '--d': '320ms' }}>
          Desarrollamos software a la medida, tiendas en línea, apps y asistentes con inteligencia
          artificial para negocios que ya no caben en un cuaderno ni en Excel.
        </p>
        <div className={`${styles.ctas} ${styles.in}`} style={{ '--d': '440ms' }}>
          <a className="btn btn-primary" href="#proyectos">
            Ver proyectos
            <ArrowRight />
          </a>
          <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsApp />
            Hablar con un socio
          </a>
        </div>
      </div>

      <a href={`#${p.slug}`} className={styles.visual} aria-label={`Ver el proyecto ${p.name}`}>
        <BrowserFrame
          eager
          src={desktopShot.src}
          srcSet={desktopShot.srcSet}
          sizes="(min-width: 960px) 600px, 100vw"
          alt={`Tienda en línea de ${p.name} con catálogo para perros y gatos`}
          className={styles.desktop}
        />
        <div className={styles.mobileWrap}>
          <PhoneFrame
            eager
            src={lokiShot.src}
            alt="Loki, el asistente con IA de VASAM, recomendando productos en el celular"
            className={styles.mobile}
          />
        </div>
        <span className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          {p.name} · Tienda en línea con IA
        </span>
      </a>
    </div>

    <LogoMarquee />
  </section>
);

export default Hero;
