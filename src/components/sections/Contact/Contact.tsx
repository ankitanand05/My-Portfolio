import React, { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'ankitanand8969@gmail.com',
      link: 'mailto:ankitanand8969@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 9523218671',
      link: 'tel:+919523218671'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Kolkata, West Bengal',
      link: 'https://maps.google.com/?q=Kolkata,+West+Bengal'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', url: 'https://github.com/ankitanand05' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/ankit-anand-/' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with EmailJS or your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.contact} section ${isVisible ? 'fade-in visible' : 'fade-in'}`}
    >
      <div className="container">
        <div className={styles.contactHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Let's discuss backend development opportunities, AI projects, or potential collaborations
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <Card className={styles.contactCard}>
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new backend development opportunities, 
                AI/ML projects, system architecture challenges, or potential collaborations. 
                Feel free to reach out!
              </p>

              <div className={styles.contactDetails}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={styles.contactItem}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className={styles.contactIcon}>
                      <info.icon />
                    </div>
                    <div className={styles.contactText}>
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h4>Follow Me</h4>
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
            </Card>
          </div>

          <div className={styles.contactForm}>
            <Card className={styles.formCard}>
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={styles.formTextarea}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;