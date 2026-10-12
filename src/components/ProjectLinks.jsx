import { ArrowRight, ArrowUpRight, WhatsApp } from './ui/icons';
import { projectPath } from '../data/projects';
import { whatsappLink } from '../data/site';

// Botones al pie de cada proyecto. El enlace en vivo solo aparece si el proyecto tiene dominio.
const ProjectLinks = ({ project, className }) => (
  <div className={className}>
    <a className="btn btn-primary" href={projectPath(project)}>
      Ver caso completo
      <ArrowRight />
    </a>
    {project.url && (
      <a className="btn btn-ghost" href={project.url} target="_blank" rel="noopener noreferrer">
        Ver proyecto en vivo
        <ArrowUpRight />
      </a>
    )}
    <a
      className="btn btn-ghost"
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
