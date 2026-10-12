import Gallery from './ui/Gallery';
import { PhoneFrame } from './ui/Frames';
import { ArrowUpRight, WhatsApp } from './ui/icons';
import { featuredProject as p } from '../data/projects';
import { whatsappLink } from '../data/site';
import styles from './FeaturedCase.module.css';

const FeaturedCase = () => (
  <section id="proyectos" className={`section ${styles.section}`} aria-labelledby={`${p.slug}-title`}>
    <div className="wrap">
      <header id={p.slug} className={styles.head}>
        <div data-reveal>
          <p className={styles.tag}>Proyecto insignia</p>
          <h2 id={`${p.slug}-title`} className={styles.name}>
            {p.name}
          </h2>
          <p className={styles.category}>
            {p.category} · {p.place}
          </p>
          {p.url && (
            <a className={styles.domain} href={p.url} target="_blank" rel="noopener noreferrer">
              {p.domain}
              <ArrowUpRight />
            </a>
          )}
        </div>
        <div className={styles.intro} data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className={styles.headline}>{p.headline}</p>
          <p className={styles.summary}>{p.summary}</p>
        </div>
      </header>

      <div data-reveal>
        <Gallery shots={p.shots} projectName={p.name} />
      </div>

      <div className={styles.loki} aria-labelledby="loki-title">
        <div className={styles.lokiCopy} data-reveal>
          <p className={styles.lokiTag}>
            <span className={styles.live} aria-hidden="true" />
            Asistente con inteligencia artificial
          </p>
          <h3 id="loki-title">{p.assistant.title}</h3>
          <p className={styles.lokiText}>{p.assistant.text}</p>
          <ul className={styles.lokiPoints}>
            {p.assistant.points.map((pt, i) => (
              <li key={pt} data-reveal style={{ '--reveal-delay': `${150 + i * 80}ms` }}>
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.phones} data-reveal style={{ '--reveal-delay': '150ms' }}>
          {p.assistant.shots.map((s, i) => (
            <PhoneFrame
              key={s.src}
              src={s.src}
              alt={`${p.name}: ${s.label}`}
              className={`${styles.phone} ${i ? styles.phoneBack : ''}`}
            />
          ))}
        </div>
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
        <div className={styles.links}>
          {p.url && (
            <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
              Visitar {p.domain}
              <ArrowUpRight />
            </a>
          )}
          <a
            className="btn btn-ghost"
            href={whatsappLink(`Hola SocioIA, vi el proyecto ${p.name} y quiero algo parecido para mi negocio`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
            Quiero algo así
          </a>
        </div>
      </footer>
    </div>
  </section>
);

export default FeaturedCase;
