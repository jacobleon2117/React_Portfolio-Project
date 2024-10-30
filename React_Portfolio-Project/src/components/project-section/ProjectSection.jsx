import { FaReact, FaNodeJs, FaExpandAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss, 
         SiSupabase, SiD3Dotjs, SiPostgresql, SiVuedotjs, SiFirebase } from 'react-icons/si';
import styles from './ProjectSection.module.css';

const techColors = {
  React: '#61DAFB',
  'Node.js': '#8CC84B',
  MongoDB: '#47A248',
  Express: '#4A4A4A',
  TypeScript: '#007ACC',
  'Next.js': '#000000',
  'Tailwind CSS': '#06B6D4',
  Supabase: '#3ECF8E',
  'D3.js': '#F9A03C',
  PostgreSQL: '#336791',
  'Vue.js': '#4FC08D',
  Firebase: '#FFCA28'
};

const getTechIcon = (tech) => {
  const icons = {
    React: FaReact,
    'Node.js': FaNodeJs,
    MongoDB: SiMongodb,
    Express: SiExpress,
    TypeScript: SiTypescript,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    Supabase: SiSupabase,
    'D3.js': SiD3Dotjs,
    PostgreSQL: SiPostgresql,
    'Vue.js': SiVuedotjs,
    Firebase: SiFirebase
  };
  return icons[tech];
};

const projects = [
  {
    id: 1, // Added IDs for better key management
    title: 'Project One',
    description: 'A full-stack web application built with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/public/images/123.jpg',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com',
    hasImage: true
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Modern e-commerce platform with real-time inventory management.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.com',
    hasImage: false
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Interactive dashboard with data visualization and analytics.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.com',
    hasImage: false
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A comprehensive project management system with task tracking and team collaboration features.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Express'],
    image: '/public/images/123.jpg',
    githubUrl: 'https://github.com/yourusername/project4',
    liveUrl: 'https://project4.com',
    hasImage: true
  }
];

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          Some of my recent work that showcases my skills and experience
        </p>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${
                project.hasImage ? styles.hasImage : styles.noImage
              }`}
            >
              {project.hasImage && (
                <div className={styles.projectImage}>
                  <div className={styles.imageOverlay} />
                  <img src={project.image} alt={project.title} />
                  <div className={styles.expandIndicator}>
                    <FaExpandAlt className={styles.expandIcon} />
                    <span>Expand</span>
                  </div>
                </div>
              )}
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => {
                    const IconComponent = getTechIcon(tech);
                    return IconComponent && (
                      <span 
                        key={tech} 
                        className={styles.techIcon}
                        style={{ color: techColors[tech] }}
                      >
                        <IconComponent />
                      </span>
                    );
                  })}
                </div>
                
                <div className={styles.buttonContainer}>
                  <a 
                    href={project.githubUrl}
                    className={styles.projectButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className={styles.buttonIcon} />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className={styles.projectButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className={styles.buttonIcon} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;