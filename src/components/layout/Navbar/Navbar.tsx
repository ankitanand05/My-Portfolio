import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NavItem, Theme } from '../../../types';
import styles from './Navbar.module.css';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Progress calculation
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Active section detection
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    setTimeout(() => setIsVisible(true), 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Ankit_Resume.pdf';
      link.download = 'Ankit_Anand_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.open('mailto:ankitanand8969@gmail.com?subject=Resume Request');
    }
  };

  return (
    <>
      {isMenuOpen && <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)} />}
      
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer} onClick={() => handleNavClick('#home')}>
            <div className={styles.logoText}>
              <h2>Ankit Anand</h2>
              <span className={styles.logoSubtext}>Backend Developer</span>
            </div>
          </div>

          <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className={styles.navActions}>
            <div className={styles.socialQuickLinks}>
              <a href="https://github.com/ankitanand05" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/ankit-anand-/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FiLinkedin />
              </a>
              <a href="mailto:ankitanand8969@gmail.com" className={styles.socialLink}>
                <FiMail />
              </a>
            </div>

            <button className={styles.downloadBtn} onClick={handleDownloadCV}>
              <FiDownload className={styles.btnIcon} />
              <span>CV</span>
            </button>
            
            <button className={styles.themeToggle} onClick={toggleTheme}>
              <div className={styles.toggleIcon}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </div>
            </button>
            
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={styles.hamburgerLines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;