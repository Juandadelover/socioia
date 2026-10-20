import Gallery from '../components/ui/Gallery';
import { PhoneFrame } from '../components/ui/Frames';
import LokiWave from '../components/ui/LokiWave';
import { ArrowRight, ArrowUpRight, WhatsApp } from '../components/ui/icons';
import Contact from '../components/Contact';
import Breadcrumbs from './Breadcrumbs';
import { allProjects, projectByPage, projectPath } from '../data/projects';
import { services, servicePath } from '../data/services';
import { whatsappLink } from '../data/site';
import styles from './Page.module.css';

const ProjectPage = ({ slug }) => {
  const p = projectByPage[slug];
  const built = p.pillars || p.features.map((f) => ({ title: f }));
  const related = services.filter((s) => s.projects.includes(p.slug));
  const others = allProjects.filter((o) => o.slug !== p.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Portafolio', href: '/#proyectos' },
              { label: p.name },
            ]}
          />
          <div className={styles.head}>
            <div>
              <p className={styles.eyebrow}>
                Caso de estudio · {p.category} · {p.place}
              </p>
              <h1 className={styles.title}>{p.name}</h1>
              {p.url && (
                <a className={styles.domain} href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.domain || p.url.replace(/^https?:\/\/(www\.)?/, '')}
                  <ArrowUpRight />
                </a>
              )}
            </div>
            <div>
              <p className={styles.lead}>{p.headline}</p>
              <p className={styles.text}>{p.summary}</p>
            </div>
          </div>
          <Gallery shots={p.shots} projectName={p.name} />
        </div>
      </section>

      <section className={`section ${styles.block}`} aria-labelledby="construimos">
        <div className="wrap">
          <h2 id="construimos" className={styles.h2}>
            Qué construimos para {p.name}
          </h2>
          <ol className={styles.points}>
            {built.map((b, i) => (
              <li key={b.title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{b.title}</h3>
                {b.text && <p>{b.text}</p>}
              </li>
            ))}
          </ol>

          {p.assistant && (
            <div className={styles.assistant} data-reveal>
              <div>
                <h2 className={styles.h2}>{p.assistant.title}</h2>
                <p className={styles.text}>{p.assistant.text}</p>
                <ul className={styles.checks}>
                  {p.assistant.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.phones}>
                <LokiWave />
                {p.assistant.shots.map((s) => (
                  <PhoneFrame key={s.src} src={s.src} alt={`${p.name}: ${s.label}`} className={styles.phone} />
                ))}
              </div>
            </div>
          )}

          <div className={styles.meta}>
            <div>
              <h2 className={styles.h3}>Tecnologías</h2>
              <ul className={styles.chips}>
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            {related.length > 0 && (
              <div>
                <h2 className={styles.h3}>Servicios relacionados</h2>
                <ul className={styles.links}>
                  {related.map((s) => (
                    <li key={s.slug}>
                      <a href={servicePath(s)}>
                        {s.name}
                        <ArrowRight />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.ctas}>
            {p.url && (
              <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                Visitar {p.name}
                <ArrowUpRight />
              </a>
            )}
            <a
              className={p.url ? 'btn btn-ghost' : 'btn btn-primary'}
              href={whatsappLink(`Hola SocioIA, vi el proyecto ${p.name} y quiero algo parecido para mi negocio`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
              Quiero algo así
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.others}`} aria-labelledby="otros">
        <div className="wrap">
          <h2 id="otros" className={styles.h2}>
            Otros proyectos
          </h2>
          <ul className={styles.cards}>
            {others.map((o) => {
              const cover = o.shots.find((s) => s.device === 'desktop');
              return (
                <li key={o.slug}>
                  <a href={projectPath(o)} className={styles.card}>
                    <img src={cover.thumb} alt={`${o.name}: ${cover.label}`} loading="lazy" decoding="async" width="360" height="225" />
                    <span className={styles.cardMeta}>{o.category}</span>
                    <span className={styles.cardName}>{o.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ProjectPage;
