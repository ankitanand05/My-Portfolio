import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', url: 'https://github.com/ankitanand05' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/ankit-anand-/' },
    { icon: FiMail, name: 'Email', url: 'mailto:ankitanand8969@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>Ankit Anand</h3>
            <p className={styles.footerDescription}>
              Building scalable backend systems and AI-powered solutions. 
              Passionate about creating efficient, secure, and innovative applications.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Expertise</h4>
            <ul className={styles.footerLinks}>
              <li>Backend Development</li>
              <li>AI/ML Integration</li>
              <li>Microservices Architecture</li>
              <li>Cloud Security (DSPM/CSPM)</li>
              <li>System Design</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>Kolkata, West Bengal</p>
              <p>ankitanand8969@gmail.com</p>
              <p>+91 9523218671</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
          <p>
            © 2025 Ankit Anand. All rights reserved.
          </p>
          </div>
          
          <button className={styles.scrollToTop} onClick={scrollToTop}>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;