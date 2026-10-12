import { Plus } from './ui/icons';
import { FAQS } from '../data/faqs';
import styles from './FAQ.module.css';

const FAQ = () => (
  <section id="preguntas" className="section" aria-labelledby="faq-title">
    <div className={`wrap ${styles.grid}`}>
      <div data-reveal>
        <p className="kicker">Preguntas frecuentes</p>
        <h2 id="faq-title" className={styles.title}>
          Lo que nos preguntan antes de empezar.
        </h2>
      </div>
      <div className={styles.list} data-reveal>
        {FAQS.map((f) => (
          <details key={f.q} className={styles.item}>
            <summary>
              <span>{f.q}</span>
              <Plus className={styles.icon} />
            </summary>
            <div className={styles.answer}>
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
