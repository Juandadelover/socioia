import React from 'react';
import { Target, TrendingUp, Users } from './Icons';
import styles from './Problem.module.css';

const Problem = () => {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>EL PROBLEMA</span>
          <h2 className={styles.title}>
            ¿Tu negocio está preparado para el futuro?
          </h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Target className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Competencia Digital</h3>
            <p className={styles.cardText}>
              Tus competidores ya están usando IA para automatizar procesos y mejorar la experiencia del cliente.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <TrendingUp className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Crecimiento Limitado</h3>
            <p className={styles.cardText}>
              Sin las herramientas adecuadas, tu negocio no puede escalar eficientemente ni adaptarse a las nuevas demandas.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Users className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Experiencia del Cliente</h3>
            <p className={styles.cardText}>
              Los clientes esperan respuestas inmediatas y experiencias personalizadas que solo la IA puede ofrecer 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;