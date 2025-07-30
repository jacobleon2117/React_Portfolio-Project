import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaMapMarkerAlt,
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
  SiJavascript,
  SiVite,
  SiExpo,
  SiJest,
  SiSocketdotio,
} from "react-icons/si";

const techColors = {
  React: "#61DAFB",
  "Node.js": "#8CC84B",
  MongoDB: "#47A248",
  Express: "#68CC68",
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
  JavaScript: "#F7DF1E",
  Vite: "#646CFF",
  Vercel: "#000000",
  Expo: "#4630EB",
  "React Native": "#61DAFB",
  "React Navigation": "#6B46C1",
  Jest: "#C21325",
  "Google Maps": "#4285F4",
  "Socket.io": "#25c2a0",
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
    JavaScript: SiJavascript,
    Vite: SiVite,
    Expo: SiExpo,
    "React Native": FaReact,
    "React Navigation": FaReact,
    Jest: SiJest,
    "Google Maps": FaMapMarkerAlt,
    "Socket.io": SiSocketdotio,
  };
  return icons[tech];
};

const projects = [
  {
    id: 1,
    title: "TaskCom",
    description:
      "TaskCom is a mission-critical mobile application designed to solve coordination and scheduling challenges faced by Oklahoma Task Force 1 during natural disasters, improving real-time team communication, location tracking, and operational oversight.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo",
      "Google Maps",
      "Jest",
    ],
    image: "/images/taskcom.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/jacobleon2117/OK-TF1-app/tree/FS/testing",
    hasImage: true,
  },
  {
    id: 2,
    title: "Horizon Mental Health Platform",
    description:
      "A comprehensive mental health support platform featuring therapy sessions, journal entries with mood tracking, appointment scheduling, and real-time communication. Built with modern web technologies to make mental healthcare accessible and personalized for users seeking professional support.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
      "Tailwind CSS",
    ],
    image: "/images/horizon.png",
    liveUrl: "https://horizonmentalhealth.netlify.app/",
    githubUrl: "https://github.com/jacobleon2117/horizon-mh-app",
    hasImage: true,
  },
  {
    id: 3,
    title: "3MEALS",
    description:
      "A dynamic web application designed to simplify recipe exploration and meal curation. Users can browse an extensive collection of recipes sourced from the Edamam API and save their favorites to a personalized page, enhancing their culinary journey with seamless user experience.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    image: "/images/3meals.png",
    liveUrl: "",
    githubUrl: "https://github.com/jacobleon2117/3MEALS-recipe-search",
    hasImage: true,
  },
  {
    id: 4,
    title: "StormNeighbor",
    description:
      "StormNeighbor is a community-driven severe weather app focused on real-time updates during tornadoes, storms, and other weather threats in a user's immediate area. It's like Nextdoor but built specifically for weather safety and local storm alerts.",
    technologies: ["React", "JavaScript", "Express", "Socket.io", "Supabase"],
    image: "/images/placeholder-project.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/jacobleon2117/StormNeighbor",
    hasImage: false,
    showComingSoon: true,
  },
  {
    id: 5,
    title: "Atlas Cinema Guru",
    description:
      "Atlas Cinema Guru is a comprehensive movie database and management platform that allows users to discover, track, and organize their favorite films. Built with modern web technologies, this application provides an intuitive interface for movie enthusiasts to manage their viewing preferences.",
    technologies: ["React"],
    image: "/images/cinema-guru.png",
    liveUrl:
      "https://atlas-cinema-guru-seven.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fatlas-cinema-guru-seven.vercel.app%2F",
    githubUrl: "https://github.com/jacobleon2117/atlas-cinema-guru",
    hasImage: true,
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-[var(--bg)] py-16 pb-24 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-8 overflow-x-hidden">
        <h2 className="text-3xl font-bold mb-12 text-[var(--text)] text-center">
          Projects
        </h2>

        <div className="flex flex-col gap-8 overflow-x-hidden">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg max-w-full"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-3/5 relative overflow-hidden group">
                  {project.showComingSoon ? (
                    <div className="w-full h-full aspect-video md:aspect-auto bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-[var(--text)] mb-2">
                          Coming Soon
                        </div>
                        <div className="text-sm text-[var(--text-secondary)]">
                          Project screenshots in development
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover aspect-video md:aspect-auto transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/images/placeholder-project.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-10"></div>
                    </>
                  )}
                </div>

                <div className="md:w-2/5 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--text)] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        IconComponent && (
                          <span
                            key={tech}
                            className="flex items-center gap-1 bg-[var(--bg)] px-2 py-1 rounded text-xs transition-transform duration-200 hover:-translate-y-0.5"
                            style={{ color: techColors[tech] }}
                            title={tech}
                          >
                            <IconComponent className="text-base" />
                            <span>{tech}</span>
                          </span>
                        )
                      );
                    })}
                  </div>

                  <div className="mt-auto flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-[var(--accent)] text-white rounded-lg text-sm transition-all duration-200 cursor-pointer no-underline hover:opacity-90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live View
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-gray-400 text-gray-200 rounded-lg text-sm cursor-not-allowed">
                        <FaExternalLinkAlt className="text-sm" />
                        Coming Soon
                      </div>
                    )}
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm transition-all duration-200 cursor-pointer no-underline hover:bg-[var(--hover)] hover:border-[var(--accent)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-base" />
                      GitHub
                    </a>
                  </div>
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
