import styles from './Ticker.module.css';

const WORDS = [
  'Software a la medida',
  'Tiendas en línea',
  'Apps móviles',
  'Asistentes con IA',
  'Automatización',
  'Marketing digital',
];

// Franja decorativa en movimiento; el contenido real de servicios vive en su propia sección.
const Ticker = () => (
  <div className={styles.ticker} aria-hidden="true">
    <div className={styles.track}>
      {[0, 1].map((copy) => (
        <div key={copy} className={styles.group}>
          {WORDS.map((w, i) => (
            <span key={w} className={i % 2 ? styles.outline : styles.solid}>
              {w}
              <i className={styles.star}>✦</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Ticker;
