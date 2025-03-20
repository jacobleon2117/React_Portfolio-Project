import { Server, Layout } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center bg-bg py-20 relative"
    >
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col gap-16">
          <h1 className="text-5xl font-bold text-text leading-tight">
            About Me
          </h1>

          <div className="flex flex-col gap-12">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)] transition-all duration-200 ease-in-out w-full hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
              <div className="max-w-full">
                <h3 className="text-2xl font-semibold mb-4 text-text">
                  About Me
                </h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Currently studying at Atlas School specializing in computer
                  science and full stack web development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)] transition-all duration-200 ease-in-out flex flex-col hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
                <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-200 ease-in-out group-hover:scale-110">
                  <Layout className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-text">
                  Frontend Development
                </h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Creating responsive and intuitive user interfaces with modern
                  frameworks.
                </p>
              </div>

              <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)] transition-all duration-200 ease-in-out flex flex-col hover:translate-y-[-5px] hover:border-[var(--accent)] hover:shadow-lg">
                <div className="bg-[var(--accent)] w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-200 ease-in-out group-hover:scale-110">
                  <Server className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-text">
                  Backend Development
                </h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Building robust server-side applications and APIs for scalable
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
