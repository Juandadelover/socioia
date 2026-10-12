import { ArrowRight, WhatsApp } from '../components/ui/icons';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Breadcrumbs from './Breadcrumbs';
import { projectBySlug, projectPath } from '../data/projects';
import { serviceBySlug, services, servicePath } from '../data/services';
import { whatsappLink } from '../data/site';
import styles from './Page.module.css';

const ServicePage = ({ slug }) => {
  const s = serviceBySlug[slug];
  const related = s.projects.map((x) => projectBySlug[x]).filter(Boolean);
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Servicios', href: '/#servicios' },
              { label: s.name },
            ]}
          />
          <div className={styles.head}>
            <div>
              <p className={styles.eyebrow}>Servicio · Medellín, Valledupar y toda Colombia</p>
              <h1 className={`${styles.title} ${styles.titleLong}`}>{s.title}</h1>
            </div>
            <div>
              {s.intro.map((t) => (
                <p key={t.slice(0, 20)} className={styles.text}>
                  {t}
                </p>
              ))}
              <div className={styles.ctas}>
                <a
                  className="btn btn-primary"
                  href={whatsappLink(`Hola SocioIA, quiero cotizar: ${s.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp />
                  Cotizar {s.name.toLowerCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.block}`} aria-labelledby="incluye">
        <div className="wrap">
          <h2 id="incluye" className={styles.h2}>
            Qué incluye
          </h2>
          <ul className={styles.includes}>
            {s.includes.map((inc, i) => (
              <li key={inc} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
                {inc}
              </li>
            ))}
          </ul>

          <h2 className={styles.h2}>Proyectos reales de {s.name.toLowerCase()}</h2>
          <ul className={styles.cards}>
            {related.map((p) => {
              const cover = p.shots.find((x) => x.device === 'desktop');
              return (
                <li key={p.slug}>
                  <a href={projectPath(p)} className={styles.card}>
                    <img src={cover.thumb} alt={`${p.name}: ${cover.label}`} loading="lazy" decoding="async" width="360" height="225" />
                    <span className={styles.cardMeta}>
                      {p.category} · {p.place}
                    </span>
                    <span className={styles.cardName}>{p.name}</span>
                    <span className={styles.cardText}>{p.headline}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Process />

      <section className={`section ${styles.others}`} aria-labelledby="otros-servicios">
        <div className="wrap">
          <h2 id="otros-servicios" className={styles.h2}>
            Otros servicios
          </h2>
          <ul className={styles.links}>
            {others.map((o) => (
              <li key={o.slug}>
                <a href={servicePath(o)}>
                  {o.name}
                  <ArrowRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ServicePage;
