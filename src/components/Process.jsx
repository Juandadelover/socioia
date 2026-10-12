import styles from './Process.module.css';

const STEPS = [
  {
    title: 'Conversación',
    text: 'Nos cuentas cómo funciona tu negocio y qué lo está frenando. Hacemos las preguntas incómodas desde el principio.',
  },
  {
    title: 'Propuesta clara',
    text: 'Recibes por escrito el alcance, los tiempos y el valor antes de empezar. Sin letra pequeña.',
  },
  {
    title: 'Entregas frecuentes',
    text: 'Diseñamos y programamos por etapas. Ves y pruebas el software real en cada avance, no solo informes.',
  },
  {
    title: 'Lanzamiento y acompañamiento',
    text: 'Publicamos, capacitamos a tu equipo y seguimos ajustando con lo que aprendemos del uso diario.',
  },
];

const Process = () => (
  <section id="proceso" className={`section ${styles.section}`} aria-labelledby="proceso-title">
    <div className="wrap">
      <div className={styles.head} data-reveal>
        <p className="kicker">Cómo trabajamos</p>
        <h2 id="proceso-title">De la idea al software que usas cada día.</h2>
      </div>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
            <span className={styles.n}>{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
