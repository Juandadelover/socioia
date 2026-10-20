import styles from './LokiWave.module.css';

// Loki, la mascota de VASAM, saludando (animación tomada del chat de vasampetshop.com).
// Con movimiento reducido se muestra la imagen quieta.
const LokiWave = ({ className = '' }) => (
  <picture className={`${styles.loki} ${className}`}>
    <source srcSet="/loki/loki-saludando-quieto.webp" media="(prefers-reduced-motion: reduce)" />
    <img
      src="/loki/loki-saludando.webp"
      alt="Loki, la mascota de VASAM, saludando"
      width="224"
      height="342"
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  </picture>
);

export default LokiWave;
