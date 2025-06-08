import { Code, Server, Database, Laptop } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[var(--bg)] relative overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-8 overflow-x-hidden">
        <h2 className="text-4xl font-bold mb-16 text-center text-[var(--text)]">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Code className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)]">
                Frontend Development
              </h3>
            </div>
            <p className="text-[var(--text-secondary)]">
              Building responsive interfaces with React, JavaScript, and modern
              CSS frameworks like Tailwind. Specializing in creating intuitive,
              accessible, and performant user experiences that work across all
              devices.
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Server className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)]">
                Backend Development
              </h3>
            </div>
            <p className="text-[var(--text-secondary)]">
              Creating robust APIs and server applications using Node.js,
              Express, and database technologies. Implementing secure
              authentication, RESTful services, and optimized data processing.
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Database className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)]">
                Database Design
              </h3>
            </div>
            <p className="text-[var(--text-secondary)]">
              Designing and implementing efficient database structures with
              MongoDB, PostgreSQL, and related technologies. Focusing on data
              integrity, performance optimization, and scalable schema design.
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Laptop className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)]">
                UI/UX Design
              </h3>
            </div>
            <p className="text-[var(--text-secondary)]">
              Creating intuitive user interfaces and experiences with a focus on
              usability and modern design principles. Translating user needs
              into elegant solutions while maintaining brand consistency and
              accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
