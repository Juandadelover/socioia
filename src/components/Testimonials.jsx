import React from 'react';
import { Star } from './Icons';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>TESTIMONIOS</span>
          <h2 className={styles.title}>
            Lo que dicen nuestros clientes
          </h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={styles.star} filled />
              ))}
            </div>
            <p className={styles.quote}>
              "SocioIA transformó completamente nuestro servicio al cliente. Ahora atendemos 24/7 y nuestras ventas aumentaron 300%."
            </p>
            <div className={styles.author}>
              <strong>María González</strong>
              <span>CEO, Tienda La Esperanza</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={styles.star} filled />
              ))}
            </div>
            <p className={styles.quote}>
              "El agente de IA que desarrollaron para nuestro restaurante es increíble. Maneja reservas y pedidos automáticamente."
            </p>
            <div className={styles.author}>
              <strong>Carlos Martínez</strong>
              <span>Propietario, Restaurante El Buen Sabor</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={styles.star} filled />
              ))}
            </div>
            <p className={styles.quote}>
              "Profesionales excepcionales. Nos ayudaron a digitalizar nuestro negocio y ahora competimos con las grandes marcas."
            </p>
            <div className={styles.author}>
              <strong>Ana Rodríguez</strong>
              <span>Fundadora, Boutique Elegante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;