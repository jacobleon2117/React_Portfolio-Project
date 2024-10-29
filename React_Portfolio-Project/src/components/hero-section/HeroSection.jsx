import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './HeroSection.module.css';
import Particles from '../Particles';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Particles
        className="absolute inset-0"
        quantity={150}
        staticity={40}
        ease={50}
        size={1}
        color="#60a5fa"
        vx={0.3}
        vy={0.3}
      />
      <div className={`${styles.container} relative z-1`}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img
              src="/images/headshot.jpg"
              alt="Jacob Leon"
              className={styles.headshot}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.alignedContent}>
              <h1 className={styles.title}>
                Hey, I'm Jacob Leon
              </h1>
              <div className={styles.bottomContent}>
                <div className={styles.roleContainer}>
                  <h2 className={styles.subtitle}>
                    Full-stack Developer
                  </h2>
                  <p className={styles.subtext}>
                    Front-end and Back-end development
                  </p>
                </div>
                <div className={styles.location}>
                  <MapPin size={20} />
                  <span>Owasso, Oklahoma</span>
                </div>
                <div className={styles.socialLinks}>
                  <a
                    href="https://github.com/yourusername"
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className={styles.socialIcon}
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;