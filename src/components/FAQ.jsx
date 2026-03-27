import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icons from './Icons';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: Icons.User,
      question: '¿Necesito conocimientos técnicos para trabajar con ustedes?',
      answer: 'Para nada. Nosotros nos encargamos de todo lo técnico mientras tú te enfocas en hacer crecer tu negocio. Solo necesitas decirnos qué quieres lograr y nosotros hacemos el resto.',
      category: 'Proceso'
    },
    {
      icon: Icons.Clock,
      question: '¿Cuánto tiempo toma desarrollar una página web?',
      answer: 'Entre 2-4 semanas dependiendo de la complejidad y funcionalidades. Te damos un cronograma exacto con fechas específicas en la propuesta inicial para que sepas qué esperar.',
      category: 'Tiempos'
    },
    {
      icon: Icons.Bot,
      question: '¿Los chatbots realmente funcionan 24/7?',
      answer: 'Sí, funcionan las 24 horas del día, 7 días a la semana. Responden al instante en WhatsApp, Instagram y Facebook sin importar la hora. Nunca más perderás un cliente por no contestar a tiempo.',
      category: 'IA'
    },
    {
      icon: Icons.CreditCard,
      question: '¿Puedo cancelar los servicios mensuales cuando quiera?',
      answer: 'Claro que sí, sin penalización ni compromisos de permanencia. Solo necesitas avisar con 30 días de anticipación y listo. Creemos en ganarnos tu confianza cada mes.',
      category: 'Facturación'
    },
    {
      icon: Icons.MapPin,
      question: '¿Trabajan con negocios fuera de Valledupar?',
      answer: 'Sí, trabajamos con negocios de toda Colombia. Sin embargo, nuestro enfoque principal es Cesar y la región Caribe, donde mejor entendemos el mercado local.',
      category: 'Ubicación'
    },
    {
      icon: Icons.ShieldCheck,
      question: '¿Qué pasa si no estoy satisfecho con los resultados?',
      answer: 'Ofrecemos garantía de satisfacción. Si en los primeros 30 días no ves mejoras medibles en tu negocio, te devolvemos tu dinero. Así de seguros estamos de nuestro trabajo.',
      category: 'Garantía'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Icons.HelpCircle />
            <span>FAQ</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Preguntas</span> frecuentes
          </h2>
          <p className={styles.subtitle}>
            Resolvemos todas tus dudas sobre nuestros servicios y procesos
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.list}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.categoryBadge}>
                  {faq.category}
                </div>
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className={styles.questionContent}>
                    <div className={styles.iconContainer}>
                      <faq.icon />
                    </div>
                    <span className={styles.questionText}>{faq.question}</span>
                  </div>
                  <div className={styles.toggleIcon}>
                    <Icons.ChevronDown />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                      <div className={styles.answerContent}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.stillHaveQuestions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.stillHaveTitle}>¿Aún tienes dudas?</h3>
            <p className={styles.stillHaveText}>
              Contáctanos por WhatsApp y te respondemos al instante
            </p>
            <button
              className={styles.contactButton}
              onClick={() => {
                const phone = '3113678555';
                const message = encodeURIComponent('Hola, tengo algunas preguntas sobre los servicios de SocioIA');
                window.open(`https://wa.me/57${phone}?text=${message}`, '_blank');
              }}
            >
              <Icons.WhatsApp />
              <span>Preguntar por WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;