import { Plus } from './ui/icons';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del alcance: no cuesta lo mismo un sitio de marca que una plataforma con varios tipos de usuario. Después de una primera conversación te enviamos una propuesta por escrito con alcance, tiempos y valor, para que decidas con toda la información.',
  },
  {
    q: '¿Cuánto tiempo toma?',
    a: 'Un sitio web suele tomar entre 2 y 4 semanas. Los sistemas a la medida se construyen por etapas, así que empiezas a ver y usar partes reales del software desde las primeras semanas. En la propuesta te damos un cronograma con fechas.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Tú conoces tu negocio y nosotros nos encargamos de lo técnico. Te explicamos cada decisión en palabras simples y capacitamos a tu equipo cuando el software sale a producción.',
  },
  {
    q: '¿Trabajan con negocios fuera de Medellín y Valledupar?',
    a: 'Sí. Tenemos presencia en Medellín y Valledupar y trabajamos con negocios de toda Colombia de forma remota, con reuniones por videollamada y avances que puedes revisar desde tu celular.',
  },
  {
    q: '¿Qué pasa cuando el software ya está publicado?',
    a: 'Seguimos contigo. Corregimos lo que aparezca en el uso diario, ajustamos lo que tu equipo necesite y te acompañamos con nuevas funciones cuando el negocio crece.',
  },
  {
    q: '¿Pueden agregar inteligencia artificial a lo que ya tengo?',
    a: 'Sí. Podemos conectar asistentes que respondan con la información de tu negocio, automatizar tareas repetitivas o analizar tus datos, sobre tu sistema actual o como parte de uno nuevo.',
  },
];

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
