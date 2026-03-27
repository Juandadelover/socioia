import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import Icons from './Icons';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const handleWhatsApp = () => {
    const message = 'Hola, quiero agendar una consulta gratuita para mi negocio';
    const phone = '3113678555';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/57${phone}?text=${encoded}`, '_blank');
  };

  const benefits = [
    {
      icon: Icons.SearchCheck,
      title: 'Análisis personalizado',
      description: 'Evaluamos tu negocio y identificamos oportunidades específicas de crecimiento con IA.',
      duration: '30 minutos'
    },
    {
      icon: Icons.Rocket,
      title: 'Implementación rápida',
      description: 'Resultados visibles en las primeras 2-4 semanas con nuestro proceso optimizado.',
      duration: '2-4 semanas'
    },
    {
      icon: Icons.TrendingUp,
      title: 'ROI garantizado',
      description: 'Recupera tu inversión en los primeros 90 días o te devolvemos tu dinero.',
      duration: '90 días'
    }
  ];

  return (
    <section id="contact" className={styles.finalCTA}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Icons.Calendar />
            <span>Consulta Gratuita</span>
          </div>
          <h2 className={styles.title}>
            ¿Listo para hacer <span className={styles.highlight}>crecer</span> tu negocio con{' '}
            <span className={styles.highlight}>inteligencia artificial?</span>
          </h2>
          <p className={styles.subtitle}>
            Agenda una consulta gratuita de 30 minutos y descubre cómo podemos 
            transformar tu empresa con soluciones de IA personalizadas.
          </p>
        </motion.div>
        
        <div className={styles.ctaContent}>
          <motion.div
            className={styles.benefits}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.benefitsTitle}>Lo que obtienes en la consulta:</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <benefit.icon />
                </div>
                <div className={styles.benefitContent}>
                  <div className={styles.benefitHeader}>
                    <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                    <div className={styles.benefitDuration}>{benefit.duration}</div>
                  </div>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <div className={styles.socialProof}>
              <div className={styles.proofStats}>
                <div className={styles.proofStat}>
                  <Icons.Users />
                  <span>50+ empresas atendidas</span>
                </div>
                <div className={styles.proofStat}>
                  <Icons.Star />
                  <span>100% satisfacción</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.formCard}>
              <ContactForm />
              
              <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
                <div className={styles.dividerText}>O escríbenos directo</div>
                <div className={styles.dividerLine}></div>
              </div>
              
              <button className={styles.whatsappButton} onClick={handleWhatsApp}>
                <Icons.WhatsApp />
                <span>Consulta vía WhatsApp</span>
                <Icons.ArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;