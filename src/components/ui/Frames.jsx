import styles from './Frames.module.css';

export const BrowserFrame = ({ src, alt, eager = false, className = '' }) => (
  <figure className={`${styles.browser} ${className}`}>
    <div className={styles.chrome} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <img
      src={src}
      alt={alt}
      width="1440"
      height="900"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
    />
  </figure>
);

export const PhoneFrame = ({ src, alt, eager = false, className = '' }) => (
  <figure className={`${styles.phone} ${className}`}>
    <img
      src={src}
      alt={alt}
      width="640"
      height="1385"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  </figure>
);
