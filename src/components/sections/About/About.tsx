import React, { useRef, useState, useEffect } from 'react';
import { 
  FiUser, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiAward, 
  FiTrendingUp, 
  FiCode, 
  FiBookOpen,
  FiDownload,
  FiExternalLink,
  FiCalendar,
  FiGlobe
} from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import Card from '../../common/Card/Card';
import styles from './About.module.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const isVisible = useScrollAnimation(sectionRef);
  const [activeTab, setActiveTab] = useState('overview');

  const personalInfo = [
    { icon: FiUser, label: 'Full Name', value: 'Ankit Anand' },
    { icon: FiMapPin, label: 'Based in', value: 'Kolkata, West Bengal, India' },
    { icon: FiMail, label: 'Email', value: 'ankitanand8969@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 9523218671' },
    { icon: FiCalendar, label: 'Experience', value: '2+ Years Professional' },
    { icon: FiGlobe, label: 'Languages', value: 'English, Hindi, Bengali' }
  ];

  const stats = [
    { number: '15+', label: 'Projects', icon: FiCode, color: '#667eea' },
    { number: '2+', label: 'Years Experience', icon: FiTrendingUp, color: '#764ba2' },
    { number: '1000+', label: 'DSA Problems Solved', icon: FiBookOpen, color: '#f093fb' },
    { number: '1', label: 'Research Papers', icon: FiAward, color: '#f5576c' }
  ];

  const skills = [
    'Java', 'Python', 'Node.js', 'System Design', 'Microservices',
    'Apache Spark', 'Docker', 'Kubernetes', 'AWS', 'LangChain'
  ];

  const achievements = [
    {
      title: 'Research Publication',
      description: 'Published ML research in healthcare domain',
      icon: FiBookOpen,
      link: '#'
    },
    {
      title: 'Academic Excellence',
      description: '9.2 GPA in Computer Science Engineering',
      icon: FiAward,
      link: '#'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to various projects',
      icon: FiCode,
      link: '#'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'journey', label: 'My Journey' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} section ${isVisible ? 'fade-in visible' : 'fade-in'}`}
    >
      <div className="container">
        {/* Enhanced Header */}
        <div className={styles.aboutHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleMain}>About Me</span>
              <span className={styles.titleAccent}>.</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Passionate Backend Developer crafting scalable solutions with modern technologies
            </p>
            <div className={styles.headerDecoration}>
              <div className={styles.decorationLine}></div>
              <div className={styles.decorationDot}></div>
              <div className={styles.decorationLine}></div>
            </div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          {/* Left Column - Main Content */}
          <div className={styles.mainContent}>
            {/* Tab Navigation */}
            <div className={styles.tabNavigation}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <Card className={styles.contentCard}>
              {activeTab === 'overview' && (
                <div className={styles.overviewContent}>
                  <div className={styles.introSection}>
                    <h3>Hello! I'm Ankit 👋</h3>
                    <p className={styles.introParagraph}>
                      I'm a <strong>dynamic Backend Developer</strong> with 2+ years of experience specializing in 
                      <span className={styles.highlight}> Java, Python, and Node.js</span>. My expertise lies in 
                      system design, distributed systems, and building high-performance applications that scale.
                    </p>
                    
                    <div className={styles.techStack}>
                      <h4>Core Technologies</h4>
                      <div className={styles.techGrid}>
                        {skills.map((skill, index) => (
                          <span key={index} className={styles.techPill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.personalInfoSection}>
                    <h4>Personal Information</h4>
                    <div className={styles.personalInfo}>
                      {personalInfo.map((info, index) => (
                        <div key={index} className={styles.infoItem}>
                          <div className={styles.infoIconWrapper}>
                            <info.icon className={styles.infoIcon} />
                          </div>
                          <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>{info.label}</span>
                            <span className={styles.infoValue}>{info.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className={styles.journeyContent}>
                  <h3>My Professional Journey</h3>
                  <div className={styles.journeyTimeline}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h4>Backend Developer (Current)</h4>
                        <p>Building scalable microservices and distributed systems using modern tech stack</p>
                        <span className={styles.timelinePeriod}>2022 - Present</span>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h4>Computer Science Graduate</h4>
                        <p>B.Tech from Meghnad Saha Institute of Technology with 9.2 GPA</p>
                        <span className={styles.timelinePeriod}>2018 - 2022</span>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h4>Research Publication</h4>
                        <p>Published ML research paper in healthcare domain</p>
                        <span className={styles.timelinePeriod}>2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className={styles.achievementsContent}>
                  <h3>Key Achievements</h3>
                  <div className={styles.achievementsList}>
                    {achievements.map((achievement, index) => (
                      <div key={index} className={styles.achievementItem}>
                        <div className={styles.achievementIcon}>
                          <achievement.icon />
                        </div>
                        <div className={styles.achievementContent}>
                          <h4>{achievement.title}</h4>
                          <p>{achievement.description}</p>
                          <a href={achievement.link} className={styles.achievementLink}>
                            Learn more <FiExternalLink />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>

          <div className={styles.sideContent}>
            <Card className={styles.statsCard}>
              <h4 className={styles.statsTitle}>Professional Stats</h4>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div 
                      className={styles.statIcon}
                      style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                    >
                      <stat.icon />
                    </div>
                    <div className={styles.statContent}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Enhanced Image Section */}
            <Card className={styles.imageCard}>
              <div className={styles.aboutImage}>
                <div className={styles.imageContainer}>
                  <img src="/assets/images/projects/about.png" alt="Ankit Anand - Backend Developer" />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <h4>Ankit Anand</h4>
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className={styles.imageDecorations}>
                  <div className={styles.decoration1}></div>
                  <div className={styles.decoration2}></div>
                  <div className={styles.decoration3}></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;