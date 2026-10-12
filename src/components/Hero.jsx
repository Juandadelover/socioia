import { BrowserFrame, PhoneFrame } from './ui/Frames';
import { ArrowRight, Pin, WhatsApp } from './ui/icons';
import { featuredProject, projects } from '../data/projects';
import { whatsappLink } from '../data/site';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="inicio" className={styles.hero}>
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.copy}>
        <p className={styles.place}>
          <Pin aria-hidden="true" />
          Medellín y Valledupar, Colombia
        </p>
        <h1 className={styles.title}>
          <span className={styles.line}>Tecnología que</span>
          <span className={styles.accent}>trabaja por ti.</span>
        </h1>
        <p className={styles.lead}>
          Desarrollamos software a la medida, tiendas en línea, apps y soluciones con inteligencia
          artificial para negocios que ya no caben en un cuaderno ni en Excel.
        </p>
        <div className={styles.ctas}>
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

      <a href="#credicontrol" className={styles.visual} aria-label="Ver el caso de CrédiControl">
        <BrowserFrame
          eager
          src={featuredProject.shots[0].src}
          alt="Panel de CrédiControl con el recaudo del día, la cartera activa y los cobros pendientes"
          className={styles.desktop}
        />
        <PhoneFrame
          eager
          src={featuredProject.shots[1].src}
          alt="Ruta del cobrador de CrédiControl en el celular"
          className={styles.mobile}
        />
        <span className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Caso real · {featuredProject.name}
        </span>
      </a>
    </div>

    <div className={`wrap ${styles.strip}`}>
      <p>Software en producción que construimos</p>
      <ul>
        {[featuredProject, ...projects].map((p) => (
          <li key={p.slug}>
            <a href={`#${p.slug}`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
