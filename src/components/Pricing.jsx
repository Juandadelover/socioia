import React from 'react';
import { CheckCircle, ArrowRight } from './Icons';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>PRECIOS</span>
          <h2 className={styles.title}>
            Planes flexibles para tu negocio
          </h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.planName}>Básico</h3>
            <div className={styles.price}>
              <span className={styles.amount}>$800,000</span>
              <span className={styles.period}>COP/mes</span>
            </div>
            <ul className={styles.features}>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Chatbot básico para WhatsApp
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Integración con 1 plataforma
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Soporte por email
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Reportes mensuales
              </li>
            </ul>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Comenzar ahora <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
          
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.popularBadge}>Más Popular</div>
            <h3 className={styles.planName}>Profesional</h3>
            <div className={styles.price}>
              <span className={styles.amount}>$1,500,000</span>
              <span className={styles.period}>COP/mes</span>
            </div>
            <ul className={styles.features}>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Agente IA avanzado multiplataforma
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Integración ilimitada
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Soporte prioritario 24/7
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Analytics en tiempo real
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Personalización completa
              </li>
            </ul>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Comenzar ahora <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.planName}>Enterprise</h3>
            <div className={styles.price}>
              <span className={styles.amount}>Personalizado</span>
            </div>
            <ul className={styles.features}>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Solución empresarial completa
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Desarrollo personalizado
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Gerente de cuenta dedicado
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                SLA garantizado
              </li>
              <li>
                <CheckCircle className={styles.checkIcon} />
                Capacitación del equipo
              </li>
            </ul>
            <a href="https://wa.me/573113678555" className={styles.cta}>
              Contactar ventas <ArrowRight className={styles.ctaIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;