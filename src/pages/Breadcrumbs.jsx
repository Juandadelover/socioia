import styles from './Page.module.css';

// Migas de pan visibles (el JSON-LD BreadcrumbList se genera en src/seo/routes.js).
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Migas de pan" className={styles.crumbs}>
    <ol>
      {items.map((it, i) => (
        <li key={it.label}>
          {i < items.length - 1 ? <a href={it.href}>{it.label}</a> : <span aria-current="page">{it.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
