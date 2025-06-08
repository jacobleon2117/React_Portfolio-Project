import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaSass,
  FaGitAlt,
  FaPython,
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
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#007ACC",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#8CC84B",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#68CC68",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#264de4",
  },
  {
    name: "SCSS",
    icon: <FaSass />,
    color: "#CC6699",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#563d7c",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "#646CFF",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "#F24E1E",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#3776AB",
  },
];

const TechIcons = () => {
  const firstRow = technologies.slice(0, 7);
  const secondRow = technologies.slice(7, 14);

  return (
    <div className="flex flex-col items-center mt-8 mb-12 w-full mx-auto overflow-x-hidden">
      <div className="grid grid-cols-7 gap-6 max-w-4xl mx-auto mb-6 overflow-x-hidden">
        {firstRow.map((tech) => (
          <div
            key={tech.name}
            className="w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
            style={{
              backgroundColor: `${tech.color}20`,
              color: tech.color,
            }}
            title={tech.name}
          >
            {React.cloneElement(tech.icon, { size: 28 })}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-6 max-w-4xl mx-auto overflow-x-hidden">
        {secondRow.map((tech) => (
          <div
            key={tech.name}
            className="w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
            style={{
              backgroundColor: `${tech.color}20`,
              color: tech.color,
            }}
            title={tech.name}
          >
            {React.cloneElement(tech.icon, { size: 28 })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
