import { forwardRef } from 'react';
import type { Project } from '../data/projects';
import Button from './Button';
import '../css/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project, index }, ref) => {
  return (
    <article ref={ref} className="project-card">
      <div
        className="project-card__bg"
        style={{ backgroundImage: `url(${project.image})` }}
        aria-hidden="true"
      />
      <div className="project-card__overlay" aria-hidden="true" />

      <div className="project-card__content">
        <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="project-card__title">{project.title}</h3>
        {project.date && <p className="project-card__date">{project.date}</p>}
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__stack">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.github && (
            <Button href={project.github} target="_blank" variant="outline">
              GitHub
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} target="_blank">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
