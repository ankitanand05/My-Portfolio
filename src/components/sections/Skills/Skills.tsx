import React, { useRef, useState, useEffect } from 'react';
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiGitBranch,
  FiCloud,
  FiLayers,
  FiSettings,
  FiTrendingUp,
  FiStar,
} from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { skillsData } from '../../../data/skills';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>);
  const [activeCategory, setActiveCategory] = useState<number>(0); // Default to the first category

  const categoryIcons: { [key: string]: any } = {
    Frontend: FiCode,
    Backend: FiServer,
    Database: FiDatabase,
    DevOps: FiCloud,
    Tools: FiTool,
    'Programming Languages': FiLayers,
    'Version Control': FiGitBranch,
    Others: FiSettings,
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return '#10B981'; // Emerald
    if (level >= 80) return '#3B82F6'; // Blue
    if (level >= 70) return '#8B5CF6'; // Purple
    if (level >= 60) return '#F59E0B'; // Amber
    return '#EF4444'; // Red
  };

  const getSkillGradient = (level: number) => {
    if (level >= 90) return 'linear-gradient(135deg, #10B981, #059669)';
    if (level >= 80) return 'linear-gradient(135deg, #3B82F6, #2563EB)';
    if (level >= 70) return 'linear-gradient(135deg, #8B5CF6, #7C3AED)';
    if (level >= 60) return 'linear-gradient(135deg, #F59E0B, #D97706)';
    return 'linear-gradient(135deg, #EF4444, #DC2626)';
  };

  const selectedCategory = skillsData[activeCategory];
  const IconComponent = categoryIcons[selectedCategory.name] || FiCode;
  const averageLevel = Math.round(
    selectedCategory.skills.reduce((acc: number, skill: any) => acc + skill.level, 0) /
      selectedCategory.skills.length
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`${styles.skills} section ${isVisible ? 'fade-in visible' : 'fade-in'}`}
    >
      <div className="container">
        <div className={styles.skillsContent}>
          {/* Left Side - Category Navigation */}
          <div className={styles.categoryNavigation}>
            {skillsData.map((category, index) => {
              const IconComponent = categoryIcons[category.name] || FiCode;
              return (
                <button
                  key={index}
                  className={`${styles.categoryButton} ${
                    activeCategory === index ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  <IconComponent className={styles.categoryIcon} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side - Selected Category Details */}
          <div className={styles.skillsDetails}>
            <div className={styles.categoryHero}>
              <div className={styles.categoryHeroContent}>
                <div className={styles.categoryMainIcon}>
                  <IconComponent />
                </div>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryTitle}>{selectedCategory.name}</h3>
                  <p className={styles.categoryDescription}>
                    {selectedCategory.name === 'Frontend' &&
                      'Building beautiful, responsive user interfaces with modern frameworks and tools'}
                    {selectedCategory.name === 'Backend' &&
                      'Crafting robust server-side architectures and scalable API solutions'}
                    {selectedCategory.name === 'Database' &&
                      'Managing and optimizing data storage solutions for high performance'}
                    {selectedCategory.name === 'DevOps' &&
                      'Streamlining deployment pipelines and infrastructure automation'}
                    {selectedCategory.name === 'Tools' &&
                      'Essential development and productivity tools for efficient workflows'}
                    {selectedCategory.name === 'Programming Languages' &&
                      'Core programming languages expertise across multiple paradigms'}
                    {selectedCategory.name === 'Version Control' &&
                      'Code versioning and collaboration using industry-standard tools'}
                    {selectedCategory.name === 'Others' &&
                      'Additional technical skills and emerging technologies'}
                  </p>
                  <div className={styles.categoryStats}>
                    <div className={styles.categoryStat}>
                      <FiTrendingUp className={styles.categoryStatIcon} />
                      <span className={styles.categoryStatValue}>{averageLevel}%</span>
                      <span className={styles.categoryStatLabel}>Mastery</span>
                    </div>
                    <div className={styles.categoryStat}>
                      <FiStar className={styles.categoryStatIcon} />
                      <span className={styles.categoryStatValue}>
                        {selectedCategory.skills.length}
                      </span>
                      <span className={styles.categoryStatLabel}>Skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className={styles.skillsGrid}>
              {selectedCategory.skills.map((skill: any, skillIndex: number) => {
                const skillColor = getSkillColor(skill.level);
                const skillGradient = getSkillGradient(skill.level);
                return (
                  <div key={skillIndex} className={styles.skillCard}>
                    <div className={styles.skillCardInner}>
                      <div className={styles.skillCardHeader}>
                        <div
                          className={styles.skillIcon}
                          style={{ background: skillGradient }}
                        >
                          <span className={styles.skillIconText}>
                            {skill.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className={styles.skillInfo}>
                          <h4 className={styles.skillName}>{skill.name}</h4>
                          <div className={styles.skillLevelContainer}>
                            <span className={styles.skillLevel} style={{ color: skillColor }}>
                              {skill.level}%
                            </span>
                            <div className={styles.skillBadge}>
                              {skill.level >= 90 && (
                                <span className={styles.expertBadge}>Expert</span>
                              )}
                              {skill.level >= 80 && skill.level < 90 && (
                                <span className={styles.advancedBadge}>Advanced</span>
                              )}
                              {skill.level >= 70 && skill.level < 80 && (
                                <span className={styles.intermediateBadge}>Intermediate</span>
                              )}
                              {skill.level < 70 && (
                                <span className={styles.beginnerBadge}>Learning</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.skillProgress}>
                        <div className={styles.skillProgressTrack}>
                          <div
                            className={styles.skillProgressFill}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              background: skillGradient,
                              transitionDelay: `${skillIndex * 0.1}s`,
                            }}
                          >
                            <div className={styles.skillProgressGlow}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;