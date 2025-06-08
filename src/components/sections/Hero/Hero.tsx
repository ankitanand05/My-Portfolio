import React, { useEffect, useState, useRef, useCallback } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiDownload, 
  FiArrowRight, 
  FiCode, 
  FiServer, 
  FiDatabase,
  FiStar,
  FiZap,
  FiAward
} from 'react-icons/fi';
import styles from './Hero.module.css';

interface MousePosition {
  x: number;
  y: number;
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const words = [
    'Backend Engineer', 
    'Full Stack Developer', 
    'Problem Solver', 
    'Cloud Architect',
    'API Specialist',
    'System Designer'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(prevText => {
        if (isDeleting) {
          return fullText.substring(0, prevText.length - 1);
        } else {
          return fullText.substring(0, prevText.length + 1);
        }
      });

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    }
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      let throttleTimer: NodeJS.Timeout;
      const throttledMouseMove = (e: MouseEvent) => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null as any;
        }, 16);
      };

      heroElement.addEventListener('mousemove', throttledMouseMove);
      return () => {
        heroElement.removeEventListener('mousemove', throttledMouseMove);
        if (throttleTimer) clearTimeout(throttleTimer);
      };
    }
  }, [handleMouseMove]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = useCallback(() => {
    try {
      const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Ankit_Resume.pdf';
        link.download = 'Ankit_Anand_Resume.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('CV download initiated successfully');
      };

      fetch('/Ankit_Resume.pdf', { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            downloadCV();
          } else {
            throw new Error('CV file not found');
          }
        })
        .catch(error => {
          console.warn('Direct download failed, trying fallback method:', error);
          window.open('/Ankit_Resume.pdf', '_blank');
          
          setTimeout(() => {
            if (!document.hidden) {
              alert('CV download failed. Please contact me directly for my resume.');
            }
          }, 1000);
        });

      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'download', {
          event_category: 'engagement',
          event_label: 'CV Download',
          value: 1
        });
      }

    } catch (error) {
      console.error('Error in CV download function:', error);
      const subject = encodeURIComponent('Resume Request');
      const body = encodeURIComponent('Hi Ankit, I would like to request your resume. Thank you!');
      window.open(`mailto:ankitanand8969@gmail.com?subject=${subject}&body=${body}`);
    }
  }, []);

  const handleScrollToContact = useCallback(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'scroll_to_contact', {
          event_category: 'navigation',
          event_label: 'Hero CTA'
        });
      }
    }
  }, []);

  const FloatingElement: React.FC<FloatingElementProps> = ({ 
    children, 
    delay = 0, 
    duration = 6, 
    className = '' 
  }) => (
    <div 
      className={`${styles.floatingElement} ${className} ${isVisible ? styles.visible : ''}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );

  const generateParticles = () => {
    return Array.from({ length: 25 }, (_, i) => (
      <div
        key={i}
        className={styles.particle}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${4 + Math.random() * 3}s`,
          '--particle-size': `${2 + Math.random() * 3}px`,
        } as React.CSSProperties}
      />
    ));
  };

  const skillsData = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Microservices', icon: '🔗' },
    { name: 'AWS', icon: '☁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' }
  ];

  return (
    <section 
      id="home"
      ref={heroRef}
      className={`${styles.hero} ${isVisible ? styles.heroVisible : ''}`}
      aria-label="Hero section"
    >
      <div className={styles.heroBackground} role="presentation">
        <div 
          className={`${styles.gradientOrb} ${styles.orbPrimary}`}
          style={{
            left: `${20 + mousePosition.x * 0.15}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
          }}
        />
        <div 
          className={`${styles.gradientOrb} ${styles.orbSecondary}`}
          style={{
            right: `${15 + (100 - mousePosition.x) * 0.08}%`,
            bottom: `${20 + (100 - mousePosition.y) * 0.05}%`,
          }}
        />
        <div 
          className={`${styles.gradientOrb} ${styles.orbTertiary}`}
          style={{
            left: `${60 + mousePosition.x * 0.05}%`,
            top: `${70 + mousePosition.y * 0.03}%`,
          }}
        />
        
        <div className={styles.particleContainer}>
          {generateParticles()}
        </div>
        
        <div className={styles.gridPattern} />
        
        <div className={styles.geometricShapes}>
          <div className={styles.shape1} />
          <div className={styles.shape2} />
          <div className={styles.shape3} />
        </div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.contentGrid}>
          
          <div className={styles.heroText}>

            <div className={`${styles.titleSection} ${isVisible ? styles.slideInLeft : ''}`}>
              <h1 className={styles.heroTitle}>
                <span className={styles.greeting}>Hi, I'm</span>{' '}
                <span className={styles.nameHighlight}>
                  Ankit
                </span>
              </h1>
              
              <div className={styles.heroSubtitle}>
                <span className={styles.prefix}>I'm a</span>{' '}
                <span className={styles.typewriter}>
                  {text}
                </span>
                <span className={styles.cursor}>|</span>
              </div>
            </div>

            <p className={`${styles.heroDescription} ${isVisible ? styles.slideInLeft : ''}`}>
              Passionate Backend Developer with <span className={styles.highlight}>2+ years</span> of experience 
              crafting scalable, high-performance solutions using <span className={styles.highlightSecondary}>Java, Python, and Node.js</span>. 
              Specialized in building robust microservices and cloud-native applications that drive business growth.
            </p>

            <div className={`${styles.skillsPills} ${isVisible ? styles.slideInLeft : ''}`}>
              {skillsData.map((skill, idx) => (
                <div 
                  key={skill.name}
                  className={styles.skillPill}
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <div className={`${styles.heroActions} ${isVisible ? styles.slideInLeft : ''}`}>
              <button
                onClick={handleScrollToContact}
                className={styles.primaryButton}
                aria-label="Contact me"
              >
                <span>Get In Touch</span>
                <FiArrowRight className={styles.buttonIcon} />
              </button>
              
              <button
                onClick={handleDownloadCV}
                className={styles.outlineButton}
                aria-label="Download my resume"
              >
                <FiDownload className={styles.buttonIcon} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className={`${styles.heroImage} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.imageWrapper}>
              
              <div className={styles.outerGlow} />
              <div className={styles.innerGlow} />
              <div className={styles.middleGlow} />
              
              <div className={styles.imageContainer}>
                
                <div className={styles.imageBackground} />
                
                <img
                  src="/assets/images/projects/ankit_light.png"
                  alt="Ankit Anand - Backend Developer"
                  className={styles.profileImage}
                  loading="eager"
                />
                
                <div className={styles.imageOverlay} />
                
                <div className={styles.floatingBadge1}>
                  <FiCode />
                  <div className={styles.badgeGlow} />
                </div>
                
                <div className={styles.floatingBadge2}>
                  <FiServer />
                  <div className={styles.badgeGlow} />
                </div>

                <div className={styles.floatingBadge3}>
                  <FiZap />
                  <div className={styles.badgeGlow} />
                </div>
              </div>

              <div className={styles.statCard1}>
                <div className={styles.statIcon}>
                  <FiAward />
                </div>
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              
              <div className={styles.statCard2}>
                <div className={styles.statIcon}>
                  <FiStar />
                </div>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>

              <div className={styles.statCard3}>
                <div className={styles.statIcon}>
                  <FiZap />
                </div>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.scrollIndicator} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;