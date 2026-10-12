import { ArrowUpRight, WhatsApp } from './ui/icons';
import { whatsappLink } from '../data/site';

// Botones al pie de cada proyecto. El enlace en vivo solo aparece si el proyecto tiene dominio.
const ProjectLinks = ({ project, className }) => (
  <div className={className}>
    {project.url && (
      <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">
        Ver proyecto en vivo
        <ArrowUpRight />
      </a>
    )}
    <a
      className={project.url ? 'btn btn-ghost' : 'btn btn-primary'}
      href={whatsappLink(`Hola SocioIA, vi el proyecto ${project.name} y quiero algo parecido para mi negocio`)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsApp />
      Quiero algo así
    </a>
  </div>
);

export default ProjectLinks;
