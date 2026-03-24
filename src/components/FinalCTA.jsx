import ContactForm from './ContactForm';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  return (
    <section id="contact" className={styles.finalCTA}>
      <div className={styles.container}>
        <div className={styles.ctaHeader}>
          <h2 className={styles.title}>
            ¿Listo para hacer crecer tu negocio con{' '}
            <span className={styles.highlight}>inteligencia artificial?</span>
          </h2>
          <p className={styles.subtitle}>
            Agenda una consulta gratuita de 30 minutos y descubre cómo podemos 
            transformar tu empresa con soluciones de IA personalizadas.
          </p>
        </div>
        
        <div className={styles.ctaContent}>
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💡</div>
              <div className={styles.benefitText}>
                <h3>Análisis personalizado</h3>
                <p>Evaluamos tu negocio y identificamos oportunidades específicas</p>
              </div>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🚀</div>
              <div className={styles.benefitText}>
                <h3>Implementación rápida</h3>
                <p>Resultados visibles en las primeras 2-4 semanas</p>
              </div>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>📈</div>
              <div className={styles.benefitText}>
                <h3>ROI garantizado</h3>
                <p>Recupera tu inversión o te devolvemos tu dinero</p>
              </div>
            </div>
          </div>
          
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;