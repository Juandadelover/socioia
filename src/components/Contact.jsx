import ContactForm from './ContactForm';
import { Instagram, Mail, Pin, WhatsApp } from './ui/icons';
import { EMAIL, INSTAGRAM, PHONE, whatsappLink } from '../data/site';
import styles from './Contact.module.css';

const formatPhone = (p) => `${p.slice(0, 3)} ${p.slice(3, 6)} ${p.slice(6)}`;

const Contact = () => (
  <section id="contacto" className={`section ${styles.section}`} aria-labelledby="contacto-title">
    <div className={`wrap ${styles.grid}`}>
      <div className={styles.copy} data-reveal>
        <h2 id="contacto-title">
          Hablemos de lo que tu negocio <span>necesita.</span>
        </h2>
        <p className={styles.lead}>
          Cuéntanos qué te está frenando. Te respondemos con preguntas concretas y, si tiene sentido
          trabajar juntos, con una propuesta por escrito.
        </p>
        <ul className={styles.channels}>
          <li>
            <WhatsApp />
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              +57 {formatPhone(PHONE)}
            </a>
          </li>
          <li>
            <Mail />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <Instagram />
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              @socioia.co
            </a>
          </li>
          <li>
            <Pin />
            <span>Medellín y Valledupar, Colombia</span>
          </li>
        </ul>
      </div>
      <div className={styles.card} data-reveal style={{ '--reveal-delay': '120ms' }}>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
