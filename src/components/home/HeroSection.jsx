import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "../common/Particles";
import TechIcons from "./TechIcons";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center bg-[var(--bg)] relative overflow-hidden py-12">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        size={0.4}
        colors={["#3b82f6", "#f8fafc", "#f1f5f9"]}
        fadeToBottom={true}
      />
      <div className="w-full max-w-5xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[var(--accent)] flex-shrink-0">
            <img
              src="assets/images/headshot.jpg"
              alt="Jacob Leon"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] leading-tight mb-2">
                Hey, I&apos;m Jacob Leon
              </h1>
              <h2 className="text-2xl md:text-3xl text-[var(--accent)] font-semibold mb-1">
                Full-stack Developer
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Front-end and Back-end development
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-lg">
                <MapPin size={18} />
                <span>Owasso, Oklahoma</span>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/jacobleon2117"
                  className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/jacobleon02"
                  className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="mailto:jacobleon2117@gmail.com"
                  className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                >
                  <FaEnvelope size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-12">
          <TechIcons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
