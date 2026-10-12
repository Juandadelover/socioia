import { useEffect, useState } from 'react';
import Logo from './ui/Logo';
import { Close, Menu, WhatsApp } from './ui/icons';
import { NAV_LINKS, whatsappLink } from '../data/site';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
      <nav className={`wrap ${styles.nav}`} aria-label="Principal">
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo className={styles.logo} />
        </a>

        <ul id="menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a className="btn btn-primary" href="#contacto" onClick={() => setOpen(false)}>
              Cotiza tu proyecto
            </a>
          </li>
        </ul>

        <div className={styles.actions}>
          <a
            className={styles.wa}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
          >
            <WhatsApp />
          </a>
          <a className={`btn btn-primary ${styles.cta}`} href="#contacto">
            Cotiza tu proyecto
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
