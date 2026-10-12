import { useEffect, useId, useRef, useState } from 'react';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ArrowLeft, ArrowRight } from './icons';
import styles from './Gallery.module.css';

const AUTOPLAY_MS = 10000;

// Visor de capturas con pestañas (patrón ARIA tabs, flechas para navegar).
// Avanza solo cada 10 s mientras está en pantalla; se pausa con el cursor o el foco encima
// y no corre si el usuario prefiere menos movimiento.
const Gallery = ({ shots, projectName, compact = false }) => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef(null);
  const tabsRef = useRef([]);
  const listRef = useRef(null);
  const id = useId();
  const current = shots[active];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', onChange);
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      mq.removeEventListener?.('change', onChange);
      io.disconnect();
    };
  }, []);

  const playing = inView && !hovered && !reduced && shots.length > 1;

  // Mantiene visible la miniatura activa sin mover la página en vertical.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabsRef.current[active];
    if (!list || !tab) return;
    const left = tab.offsetLeft; // .tabs es position: relative
    if (left < list.scrollLeft || left + tab.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: left - 8, behavior: 'smooth' });
    }
  }, [active]);

  const go = (delta) => setActive((i) => (i + delta + shots.length) % shots.length);

  const onKeyDown = (e) => {
    const last = shots.length - 1;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.gallery} ${compact ? styles.compact : ''}`}
      data-playing={playing ? 'true' : 'false'}
      style={{ '--autoplay': `${AUTOPLAY_MS}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovered(false)}
    >
      <div
        className={styles.stage}
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
      >
        <div key={current.src} className={styles.slide} data-device={current.device}>
          {current.device === 'mobile' ? (
            <PhoneFrame src={current.src} alt={`${projectName}: ${current.label}`} className={styles.phone} />
          ) : (
            <BrowserFrame
              src={current.src}
              srcSet={current.srcSet}
              sizes={compact ? '(min-width: 920px) 640px, 100vw' : '(min-width: 1240px) 1100px, 100vw'}
              alt={`${projectName}: ${current.label}`} className={styles.browser} />
          )}
        </div>
        <div className={styles.controls}>
          <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="Pantalla anterior">
            <ArrowLeft />
          </button>
          <span className={styles.count} aria-hidden="true">
            {active + 1} / {shots.length}
          </span>
          <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Pantalla siguiente">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div ref={listRef} className={styles.tabs} role="tablist" aria-label={`Pantallas de ${projectName}`} onKeyDown={onKeyDown}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            ref={(el) => (tabsRef.current[i] = el)}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            <span className={styles.thumb} data-device={s.device}>
              <img src={s.thumb || s.src} alt="" loading="lazy" decoding="async" />
              {i === active && shots.length > 1 && !reduced && (
                // El avance lo dispara el final de esta barra: pausa y reanuda en sincronía con ella.
                <span
                  key={active}
                  className={styles.progress}
                  aria-hidden="true"
                  onAnimationEnd={() => setActive((n) => (n + 1) % shots.length)}
                />
              )}
            </span>
            <span className={styles.tabLabel}>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
