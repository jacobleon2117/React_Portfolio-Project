import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
} from "react-icons/si";

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: "Programming Language",
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: <FaReact />,
    description: "JavaScript Library",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "JavaScript but better",
    color: "#007ACC",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    description: "JavaScript Runtime",
    color: "#8CC84B",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    description: "Web Framework",
    color: "#4A4A4A",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    description: "Markup Language",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    description: "Style Sheet Language",
    color: "#264de4",
  },
  {
    name: "SCSS",
    icon: <FaSass />,
    description: "CSS Preprocessor",
    color: "#CC6699",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "CSS Framework",
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    description: "CSS Framework",
    color: "#563d7c",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    description: "Build Tool",
    color: "#646CFF",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    description: "Design Tool",
    color: "#F24E1E",
  },
];

const TechSection = () => {
  return (
    <section
      id="tech"
      className="min-h-[60vh] flex items-center bg-[var(--bg)] py-20 relative scroll-mt-[var(--navbar-height)]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text)] leading-tight">
          Current technologies
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-16 max-w-3xl leading-relaxed">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-[var(--bg-secondary)] rounded-lg p-2 flex items-center gap-5 border border-[var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: `${tech.color}20`,
                  color: tech.color,
                }}
              >
                {React.cloneElement(tech.icon, { size: 28 })}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--text)] font-semibold text-lg">
                  {tech.name}
                </span>
                <span className="text-[var(--text-secondary)] text-base">
                  {tech.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
