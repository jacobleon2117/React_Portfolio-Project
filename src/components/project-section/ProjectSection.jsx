import {
  FaReact,
  FaNodeJs,
  FaExpandAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiD3Dotjs,
  SiPostgresql,
  SiVuedotjs,
  SiFirebase,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

const techColors = {
  React: "#61DAFB",
  "Node.js": "#8CC84B",
  MongoDB: "#47A248",
  Express: "#4A4A4A",
  TypeScript: "#007ACC",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  Supabase: "#3ECF8E",
  "D3.js": "#F9A03C",
  PostgreSQL: "#336791",
  "Vue.js": "#4FC08D",
  Firebase: "#FFCA28",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Redis: "#DC382D",
  GraphQL: "#E10098",
};

const getTechIcon = (tech) => {
  const icons = {
    React: FaReact,
    "Node.js": FaNodeJs,
    MongoDB: SiMongodb,
    Express: SiExpress,
    TypeScript: SiTypescript,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    Supabase: SiSupabase,
    "D3.js": SiD3Dotjs,
    PostgreSQL: SiPostgresql,
    "Vue.js": SiVuedotjs,
    Firebase: SiFirebase,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    Redis: SiRedis,
    GraphQL: SiGraphql,
  };
  return icons[tech];
};

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Vite. Features a dark/light theme toggle, smooth animations, and fully responsive design using Tailwind CSS.",
    technologies: [
      "React",
      "Node.js",
      "vercel",
      "vite",
      "javascript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    image: "/images/PF-ss.png",
    githubUrl: "https://github.com/jacobleon2117/React_Portfolio-Project",
    hasImage: true,
  },
  {
    id: 2,
    title: "GraphQL - Backend / Frontend",
    description:
      "A full-stack GraphQL implementation featuring user authentication, API integration, and optimized data queries. Built with Apollo Server and React.",
    technologies: [
      "GraphQL",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/jacobleon2117/atlas-web_graphql",
    hasImage: false,
  },
  {
    id: 3,
    title: "Atlas Files Manager",
    description:
      "A robust file management system with Redis caching, user authentication, and file upload capabilities. Features thumbnail generation and background processing.",
    technologies: [
      "Redis",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/jacobleon2117/atlas-atlas-files_manager",
    hasImage: false,
  },
  {
    id: 4,
    title: "3MEALS",
    description:
      "An application that allows users to search for recipes, users can also save recipes.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: "/images/3MEALS-SS.png",
    githubUrl: "https://github.com/jacobleon2117/3MEALS",
    hasImage: true,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[var(--bg)] py-16 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text)] text-center">
          Featured Projects
        </h2>
        <p className="text-[var(--text-secondary)] text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Some of my recent work that showcases my skills and experience
        </p>

        <div className="grid grid-cols-9 gap-6 mx-auto mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] relative ${
                project.hasImage ? "pb-0" : "p-4"
              } 
                h-80 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg
                ${project.id === 1 ? "col-span-9 md:col-span-6" : ""}
                ${project.id === 2 ? "col-span-9 md:col-span-3" : ""}
                ${project.id === 3 ? "col-span-9 md:col-span-3" : ""}
                ${project.id === 4 ? "col-span-9 md:col-span-6" : ""}
              `}
            >
              {project.hasImage && (
                <div className="relative w-full h-[45%] overflow-hidden transition-all duration-300 group">
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-20 transition-opacity duration-200 text-sm opacity-80">
                    <FaExpandAlt className="text-xl mb-1" />
                    <span>Expand</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col h-[55%] p-4 pt-4 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text)] leading-tight">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3 line-clamp-3 flex-shrink-0">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
                  {project.technologies.map((tech) => {
                    const IconComponent = getTechIcon(tech);
                    return (
                      IconComponent && (
                        <span
                          key={tech}
                          className="text-xl transition-transform duration-200 flex items-center justify-center hover:-translate-y-0.5"
                          style={{ color: techColors[tech] }}
                        >
                          <IconComponent />
                        </span>
                      )
                    );
                  })}
                </div>

                <div className="mt-auto mb-2 flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm transition-all duration-200 cursor-pointer no-underline min-w-20 hover:bg-[var(--hover)] hover:border-[var(--accent)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-base" />
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
