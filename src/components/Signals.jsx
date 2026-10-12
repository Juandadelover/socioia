import { ArrowRight } from './ui/icons';
import styles from './Signals.module.css';

const SIGNALS = [
  {
    title: 'Las cuentas viven en un cuaderno o en un Excel que solo entiende una persona.',
    text: 'Si esa persona falta, el negocio se frena. Un sistema deja la información a la mano de quien la necesita.',
  },
  {
    title: 'No sabes con certeza cuánto vendiste, cobraste o debes hoy.',
    text: 'Te enteras al final de la semana, cuando ya es tarde para corregir. Con un panel lo ves mientras pasa.',
  },
  {
    title: 'Tus clientes te piden por chat y los pedidos se pierden entre mensajes.',
    text: 'Una tienda en línea o un portal ordena los pedidos y te deja atender más sin contratar más.',
  },
];

const Signals = () => (
  <section className={styles.section} aria-labelledby="senales-title">
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.lead} data-reveal="scale">
        <p className={styles.big} aria-hidden="true">
          3
        </p>
        <h2 id="senales-title">señales de que tu negocio necesita un sistema</h2>
      </div>
      <ol className={styles.list}>
        {SIGNALS.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
            <span className={styles.n}>{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
        <li className={styles.close} data-reveal>
          <p>¿Te viste en alguna?</p>
          <a className="btn btn-dark" href="#contacto">
            Cuéntanos tu caso
            <ArrowRight />
          </a>
        </li>
      </ol>
    </div>
  </section>
);

export default Signals;
