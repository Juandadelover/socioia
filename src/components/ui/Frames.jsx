import styles from './Frames.module.css';

export const BrowserFrame = ({ src, srcSet, sizes, alt, eager = false, className = '' }) => (
  <figure className={`${styles.browser} ${className}`}>
    <div className={styles.chrome} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes || '(min-width: 1240px) 1100px, 100vw' : undefined}
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
      width="780"
      height="1688"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  </figure>
);
