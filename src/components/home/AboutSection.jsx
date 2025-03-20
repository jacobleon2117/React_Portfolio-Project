import { Code, Server, LucideTerminal, Database, Laptop } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[var(--bg)] relative">
      <div className="container max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-[var(--text)]">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--text)]">
                Who I Am
              </h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                I'm a full-stack developer passionate about creating responsive
                and intuitive web applications. Currently studying at Atlas
                School, I'm specializing in modern JavaScript frameworks and
                server-side technologies.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I enjoy solving complex problems and turning ideas into
                functional, user-friendly solutions. When I'm not coding, you'll
                find me exploring new technologies, contributing to open-source
                projects, or improving my skills through continuous learning.
              </p>
            </div>

            <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--text)]">
                My Approach
              </h3>
              <ul className="space-y-3 text-lg text-[var(--text-secondary)]">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-[var(--accent)] mt-1">
                    •
                  </span>
                  <span>
                    Clean, maintainable code with modern best practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-[var(--accent)] mt-1">
                    •
                  </span>
                  <span>User-centered design with responsive interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-[var(--accent)] mt-1">
                    •
                  </span>
                  <span>Performance-optimized applications</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-[var(--accent)] mt-1">
                    •
                  </span>
                  <span>Thoughtful architecture and scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
                Frontend Development
              </h3>
              <p className="text-[var(--text-secondary)]">
                Building responsive interfaces with React, JavaScript, and
                modern CSS frameworks like Tailwind.
              </p>
            </div>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
                Backend Development
              </h3>
              <p className="text-[var(--text-secondary)]">
                Creating robust APIs and server applications using Node.js,
                Express, and database technologies.
              </p>
            </div>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
                Database Design
              </h3>
              <p className="text-[var(--text-secondary)]">
                Designing and implementing efficient database structures with
                MongoDB, PostgreSQL, and related technologies.
              </p>
            </div>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
                UI/UX Design
              </h3>
              <p className="text-[var(--text-secondary)]">
                Creating intuitive user interfaces and experiences with a focus
                on usability and modern design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
