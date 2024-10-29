import styles from '../project-section/ProjectSection.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React, Node.js, and MongoDB.',
    image: '/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com'
  },
  {
    title: 'Project Two',
    description: 'Modern e-commerce platform with real-time inventory management.',
    image: '/projects/project2.jpg',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.com'
  },
  {
    title: 'Project Three',
    description: 'Interactive dashboard with data visualization and analytics.',
    image: '/projects/project3.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.com'
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className={`section ${styles.projectSection}`}>
      <div className="container">
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          Some of my recent work that showcases my skills and experience
        </p>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a 
                    href={project.githubUrl} 
                    className={styles.projectButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className={styles.projectButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
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
