import { FaReact, FaNodeJs, FaExpandAlt, FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss, 
         SiSupabase, SiD3Dotjs, SiPostgresql, SiVuedotjs, SiFirebase,
         SiRedis, SiGraphql } from 'react-icons/si';
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
  Firebase: '#FFCA28',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Redis: '#DC382D',
  GraphQL: '#E10098'
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
    Firebase: SiFirebase,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    Redis: SiRedis,
    GraphQL: SiGraphql
  };
  return icons[tech];
};

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Vite. Features a dark/light theme toggle, smooth animations, and fully responsive design using Tailwind CSS.',
    technologies: ['React', 'Node.js', 'vercel', 'vite', 'javascript', 'HTML', 'CSS', 'Tailwind CSS'],
    image: '/public/images/PF-ss.png',
    githubUrl: 'https://github.com/jacobleon2117/React_Portfolio-Project',
    hasImage: true
  },

  {
    id: 2,
    title: 'GraphQL - Backend / Frontend',
    description: 'A full-stack GraphQL implementation featuring user authentication, API integration, and optimized data queries. Built with Apollo Server and React.',
    technologies: ['GraphQL', 'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/jacobleon2117/atlas-web_graphql',
    hasImage: false
},
{
    id: 3,
    title: 'Atlas Files Manager',
    description: 'A robust file management system with Redis caching, user authentication, and file upload capabilities. Features thumbnail generation and background processing.',
    technologies: ['Redis', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/jacobleon2117/atlas-atlas-files_manager',
    hasImage: false
},
{
    id: 4,
    title: '3MEALS',
    description: 'An application that allows users to search for recipes, users can also save recipes.',
    technologies: ['Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS'],
    image: '/public/images/3MEALS-ss.png',
    githubUrl: 'https://github.com/jacobleon2117/3MEALS',
    hasImage: true
},
];

const ProjectSection = () => {
  return (
    <section id='projects' className={styles.projectSection}>
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