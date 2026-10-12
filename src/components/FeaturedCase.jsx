import Gallery from './ui/Gallery';
import ProjectLinks from './ProjectLinks';
import { featuredProject as p } from '../data/projects';
import styles from './FeaturedCase.module.css';

const FeaturedCase = () => (
  <section id="proyectos" className={`section ${styles.section}`} aria-labelledby="credicontrol-title">
    <div className="wrap">
      <header id="credicontrol" className={styles.head} data-reveal>
        <div>
          <p className={styles.tag}>Caso destacado</p>
          <h2 id="credicontrol-title" className={styles.name}>
            {p.name}
          </h2>
          <p className={styles.category}>{p.category}</p>
        </div>
        <div className={styles.intro}>
          <p className={styles.headline}>{p.headline}</p>
          <p className={styles.summary}>{p.summary}</p>
        </div>
      </header>

      <div data-reveal>
        <Gallery shots={p.shots} projectName={p.name} />
      </div>

      <ol className={styles.pillars}>
        {p.pillars.map((pillar, i) => (
          <li key={pillar.title} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </li>
        ))}
      </ol>

      <footer className={styles.foot} data-reveal>
        <ul className={styles.stack} aria-label="Tecnologías">
          {p.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ProjectLinks project={p} className={styles.links} />
      </footer>
    </div>
  </section>
);

export default FeaturedCase;
