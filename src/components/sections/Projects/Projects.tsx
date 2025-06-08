import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { projectsData } from '../../../data/projects';
import ProjectCard from './ProjectCard';
import Button from '../../common/Button/Button';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'desktop'];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles.projects} section ${isVisible ? 'fade-in visible' : 'fade-in'}`}
    >
      <div className="container">
        <div className={styles.projectsHeader}>
          <h2 className={styles.sectionTitle}>My Projects</h2>
          <p className={styles.sectionSubtitle}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'primary' : 'outline'}
              size="small"
              className={styles.filterButton}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;