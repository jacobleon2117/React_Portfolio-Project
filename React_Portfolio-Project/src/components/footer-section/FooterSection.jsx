import styles from '../footer-section/FooterSection.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <a href="#" className={styles.logo}>{'</J>'}</a>
            <p className={styles.tagline}>
              Full-stack developer building modern web applications
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#tech">Tech Stack</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <div className={styles.socialLinks}>
                <a href="https://github.com/yourusername" className="social-icon">
                  <FaGithub size={20} /> GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="social-icon">
                  <FaLinkedin size={20} /> LinkedIn
                </a>
                <a href="mailto:your.email@example.com" className="social-icon">
                  <FaEnvelope size={20} /> Email
                </a>
                <span className={styles.location}>
                  <FiMapPin size={20} /> Owasso, Oklahoma
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Jacob Leon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
