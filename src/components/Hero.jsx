import React from 'react';
import { ArrowRight } from './Icons';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformamos tu negocio con{' '}
            <span className={styles.gradient}>
              Inteligencia Artificial
            </span>
          </h1>
          <p className={styles.subtitle}>
            Potenciamos empresas en Valledupar con desarrollo web de última generación, 
            agentes de IA personalizados y estrategias de marketing digital que generan resultados reales.
          </p>
          <div className={styles.actions}>
            <a 
              href="https://wa.me/573113678555?text=Hola%20SocioIA%2C%20quiero%20transformar%20mi%20negocio%20con%20IA"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Transformar mi negocio
              <ArrowRight className={styles.icon} />
            </a>
            <a 
              href="#services"
              className={styles.ctaSecondary}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;