import React from 'react';
import styles from './Process.module.css';

const Process = () => {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>PROCESO</span>
          <h2 className={styles.title}>
            Cómo transformamos tu negocio
          </h2>
        </div>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Análisis</h3>
            <p className={styles.stepText}>
              Evaluamos tu negocio y identificamos oportunidades de mejora con IA.
            </p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Estrategia</h3>
            <p className={styles.stepText}>
              Diseñamos una solución personalizada que se adapte a tus necesidades específicas.
            </p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Implementación</h3>
            <p className={styles.stepText}>
              Desarrollamos y deployamos la solución con seguimiento en tiempo real.
            </p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Optimización</h3>
            <p className={styles.stepText}>
              Monitoreamos, ajustamos y mejoramos continuamente los resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;