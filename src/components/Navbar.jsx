import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'services', label: 'Servicios' },
    { to: 'process', label: 'Proceso' },
    { to: 'pricing', label: 'Precios' },
    { to: 'faq', label: 'FAQ' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <span className={styles.logoText}>Socio</span>
          <span className={styles.logoGold}>IA</span>
        </div>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className={styles.navLink}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="https://wa.me/573113678555?text=Hola%20SocioIA%2C%20quiero%20hablar%20con%20un%20socio"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con un socio
        </a>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className={styles.mobileLink}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/573113678555?text=Hola%20SocioIA%2C%20quiero%20hablar%20con%20un%20socio"
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar con un socio
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;