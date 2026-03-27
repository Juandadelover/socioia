import { Link } from 'react-scroll';
import Icons from './Icons';
import styles from './Footer.module.css';

const Footer = () => {
  const navLinks = [
    { to: 'services', label: 'Servicios', icon: Icons.Zap },
    { to: 'pricing', label: 'Precios', icon: Icons.DollarSign },
    { to: 'faq', label: 'FAQ', icon: Icons.HelpCircle },
    { to: 'contact', label: 'Contacto', icon: Icons.MessageCircle }
  ];

  const services = [
    { label: 'Desarrollo Web', icon: Icons.Globe },
    { label: 'Agentes de IA', icon: Icons.Bot },
    { label: 'Marketing Digital', icon: Icons.Smartphone },
    { label: 'E-commerce', icon: Icons.Building }
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/573113678555', 
      icon: Icons.WhatsApp,
      description: 'Contacto directo' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/socioia.co', 
      icon: Icons.Instagram,
      description: 'Síguenos' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/socioia', 
      icon: Icons.LinkedIn,
      description: 'Red profesional' 
    }
  ];

  const contactInfo = [
    {
      icon: Icons.Phone,
      label: 'Teléfono',
      value: '+57 311 367 8555',
      link: 'tel:+573113678555'
    },
    {
      icon: Icons.Mail,
      label: 'Email',
      value: 'aquilarjuan123@gmail.com',
      link: 'mailto:aquilarjuan123@gmail.com'
    },
    {
      icon: Icons.MapPin,
      label: 'Ubicación',
      value: 'Valledupar, Cesar, Colombia',
      link: null
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Icons.Cpu />
              </div>
              <div className={styles.brandText}>
                <span className={styles.logoText}>Socio</span>
                <span className={styles.logoAccent}>IA</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Transformamos negocios con inteligencia artificial
            </p>
            <p className={styles.description}>
              Automatización, desarrollo web y marketing digital 
              para empresas que quieren crecer en el mundo digital.
            </p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  title={social.description}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <Icons.Zap />
              <span>Servicios</span>
            </h4>
            <div className={styles.linksList}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <service.icon />
                  <span>{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <Icons.Navigation />
              <span>Navegación</span>
            </h4>
            <div className={styles.linksList}>
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={styles.navLink}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <Icons.MessageCircle />
              <span>Contacto</span>
            </h4>
            <div className={styles.contactList}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <contact.icon />
                  </div>
                  <div className={styles.contactContent}>
                    <div className={styles.contactLabel}>{contact.label}</div>
                    {contact.link ? (
                      <a href={contact.link} className={styles.contactValue}>
                        {contact.value}
                      </a>
                    ) : (
                      <div className={styles.contactValue}>{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © 2026 SocioIA · Todos los derechos reservados
            </p>
            <div className={styles.location}>
              <Icons.MapPin />
              <span>Valledupar, Cesar · Colombia</span>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.builtWith}>
              Desarrollado con 
              <Icons.Heart />
              en Colombia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;