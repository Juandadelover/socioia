import React from 'react';
import { Globe, Smartphone, Cpu, ArrowRight } from './Icons';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>SERVICIOS</span>
          <h2 className={styles.title}>
            Soluciones de IA para tu negocio
          </h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Globe className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Desarrollo Web IA</h3>
            <p className={styles.cardText}>
              Sitios web inteligentes con chatbots, recomendaciones personalizadas y análisis predictivo.
            </p>
            <div className={styles.price}>Desde $2,500,000 COP</div>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Cotizar proyecto <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Cpu className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Agentes de IA</h3>
            <p className={styles.cardText}>
              Asistentes virtuales personalizados para atención al cliente, ventas y soporte técnico.
            </p>
            <div className={styles.price}>Desde $1,800,000 COP</div>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Cotizar proyecto <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Smartphone className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Marketing Digital IA</h3>
            <p className={styles.cardText}>
              Campañas publicitarias optimizadas con IA, análisis de audiencias y automatización de procesos.
            </p>
            <div className={styles.price}>Desde $1,200,000 COP</div>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Cotizar proyecto <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;