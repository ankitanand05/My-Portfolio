import React from 'react';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';
import { Project } from '../../../types/project';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className={styles.projectCard} hover>
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectActions}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="small">
                  <FiEye /> Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="small">
                  <FiGithub /> Code
                </Button>
              </a>
            )}
          </div>
        </div>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.projectLinks}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;