import React, { useRef, useState, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiCheck, FiExternalLink } from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { experienceData } from '../../../data/experience';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  // Set the first experience as default
  useEffect(() => {
    if (experienceData.length > 0) {
      setSelectedExperience(experienceData[0].id);
    }
  }, []);

  const handleExperienceSelect = (id: number) => {
    setSelectedExperience(id);
  };

  const selectedExp = experienceData.find(exp => exp.id === selectedExperience);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.experience} section ${isVisible ? 'fade-in visible' : 'fade-in'}`}
    >
      <div className="container">
        <div className={styles.experienceHeader}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <p className={styles.sectionSubtitle}>
            My professional journey and career highlights
          </p>
        </div>

        <div className={styles.experienceContent}>
          {/* Left Side - Company Selection */}
          <div className={styles.companyList}>
            <div className={styles.companyListHeader}>
              <h3>Companies</h3>
              <div className={styles.headerLine}></div>
            </div>

            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => handleExperienceSelect(exp.id)}
                className={`${styles.companyButton} ${selectedExperience === exp.id ? styles.active : ''}`}
              >
                <div className={styles.companyButtonContent}>
                  <div className={styles.companyButtonLeft}>
                    <div className={styles.companyButtonDot}></div>
                    <div className={styles.companyButtonInfo}>
                      <h4 className={styles.companyButtonName}>{exp.company}</h4>
                      <p className={styles.companyButtonPosition}>{exp.position}</p>
                      <span className={styles.companyButtonDuration}>{exp.duration}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <span className={styles.currentIndicator}>Current</span>
                  )}
                </div>
                <div className={styles.companyButtonLine}></div>
              </button>
            ))}
          </div>

          {/* Right Side - Experience Details */}
          <div className={styles.experienceDetails}>
            {selectedExp ? (
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <h3 className={styles.position}>{selectedExp.position}</h3>
                    <div className={styles.companyInfo}>
                      <h4 className={styles.company}>{selectedExp.company}</h4>
                      {selectedExp.current && (
                        <span className={styles.currentBadge}>
                          <span className={styles.pulseIndicator}></span>
                          Current Role
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <FiCalendar className={styles.metaIcon} />
                    <span>{selectedExp.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiMapPin className={styles.metaIcon} />
                    <span>{selectedExp.location}</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.responsibilities}>
                    <h4 className={styles.sectionSubheading}>Key Responsibilities</h4>
                    <ul className={styles.responsibilityList}>
                      {selectedExp.description.map((item, index) => (
                        <li key={index} className={styles.responsibilityItem}>
                          <FiCheck className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.technologiesSection}>
                    <h4 className={styles.sectionSubheading}>Technologies & Tools</h4>
                    <div className={styles.technologies}>
                      {selectedExp.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.noSelection}>
                <div className={styles.noSelectionIcon}>
                  <FiExternalLink size={48} />
                </div>
                <h3>Select a Company</h3>
                <p>Choose a company from the left to view detailed experience information</p>
                <div className={styles.selectionHint}>
                  <span>👈 Click on any company</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;