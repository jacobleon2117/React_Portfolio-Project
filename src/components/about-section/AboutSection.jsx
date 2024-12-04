import styles from './AboutSection.module.css';
import { Server, Layout } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Me</h1>
          
          <div className={styles.cardsLayout}>
            <div className={styles.mainCard}>
              <div className={styles.cardContent}>
                <h3>About Me</h3>
                <p>Currently studying at Atlas School specializing in computer science and full stack web development.</p>
              </div>
            </div>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.iconWrapper}>
                  <Layout className={styles.icon} />
                </div>
                <h3>Frontend Development</h3>
                <p>Creating responsive and intuitive user interfaces with modern frameworks.</p>
              </div>
              
              <div className={styles.skillCard}>
                <div className={styles.iconWrapper}>
                  <Server className={styles.icon} />
                </div>
                <h3>Backend Development</h3>
                <p>Building robust server-side applications and APIs for scalable solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;