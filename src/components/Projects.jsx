import Gallery from './ui/Gallery';
import ProjectLinks from './ProjectLinks';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={`section ${styles.section}`} aria-labelledby="mas-proyectos">
    <div className="wrap">
      <div className={styles.intro} data-reveal>
        <h2 id="mas-proyectos">Más software que ya está trabajando.</h2>
        <p>
          Tiendas, plataformas y sitios de marca para negocios de la costa, de Antioquia y de toda
          Colombia. Cada uno resolvió un problema concreto de operación o de ventas.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className={`${styles.project} ${i % 2 ? styles.flip : ''}`}
            aria-labelledby={`${p.slug}-title`}
          >
            <div className={styles.media} data-reveal>
              <Gallery shots={p.shots} projectName={p.name} compact />
            </div>
            <div className={styles.body} data-reveal style={{ '--reveal-delay': '120ms' }}>
              <p className={styles.meta}>
                {p.category} · {p.place}
              </p>
              <h3 id={`${p.slug}-title`} className={styles.name}>
                {p.name}
              </h3>
              <p className={styles.headline}>{p.headline}</p>
              <p className={styles.summary}>{p.summary}</p>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <ul className={styles.stack} aria-label="Tecnologías">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ProjectLinks project={p} className={styles.links} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
