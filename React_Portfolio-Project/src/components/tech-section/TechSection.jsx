// We keep React import since we need cloneElement
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import styles from './TechSection.module.css';

const technologies = [
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    description: 'Programming Language',
    color: '#F7DF1E'
  },
  {
    name: 'React',
    icon: <FaReact />,
    description: 'JavaScript Library',
    color: '#61DAFB'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    description: 'JavaScript but better',
    color: '#007ACC'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    description: 'JavaScript Runtime',
    color: '#8CC84B'
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    description: 'Web Framework',
    color: '#4A4A4A'
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    description: 'Markup Language',
    color: '#E34F26'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    description: 'Style Sheet Language',
    color: '#264de4'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    description: 'CSS Framework',
    color: '#06B6D4'
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap />,
    description: 'CSS Framework',
    color: '#563d7c'
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
    description: 'Design Tool',
    color: '#F24E1E'
  }
];

const TechSection = () => {
  return (
    <section id="tech" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Current technologies</h1>
        <p className={styles.subtitle}>
          I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions.
          These are some of my main technologies.
        </p>
        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: `${tech.color}20`,
                  color: tech.color
                }}
              >
                {React.cloneElement(tech.icon, { size: 28 })}
              </div>
              <div className={styles.textContainer}>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techDescription}>{tech.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;