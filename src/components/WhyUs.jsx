import React from 'react';
import { Shield, TrendingUp, Users } from './Icons';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>¿POR QUÉ NOSOTROS?</span>
          <h2 className={styles.title}>
            Tu socio tecnológico en Valledupar
          </h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <Shield className={styles.icon} />
            <h3 className={styles.cardTitle}>Experiencia Local</h3>
            <p className={styles.cardText}>
              Conocemos el mercado de Valledupar y adaptamos las soluciones a tu contexto local.
            </p>
          </div>
          
          <div className={styles.card}>
            <TrendingUp className={styles.icon} />
            <h3 className={styles.cardTitle}>Resultados Medibles</h3>
            <p className={styles.cardText}>
              Nuestras soluciones de IA generan ROI comprobable desde el primer mes de implementación.
            </p>
          </div>
          
          <div className={styles.card}>
            <Users className={styles.icon} />
            <h3 className={styles.cardTitle}>Soporte Dedicado</h3>
            <p className={styles.cardText}>
              Equipo técnico disponible para mantener y optimizar tu solución las 24 horas del día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;