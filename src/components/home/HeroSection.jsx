import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "../common/Particles";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] flex items-center bg-[var(--bg)] relative overflow-hidden py-20">
      <Particles
        className="absolute inset-0"
        quantity={150}
        staticity={40}
        ease={50}
        size={1}
        color="#60a5fa"
        vx={0.3}
        vy={0.3}
      />
      <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
          <div className="w-60 h-60 md:order-first rounded-full overflow-hidden border-2 border-[var(--border)] flex-shrink-0 transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="./images/headshot.jpg"
              alt="Jacob Leon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 max-w-xl flex flex-col relative z-10">
            <div className="flex flex-col justify-between h-auto gap-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight mb-2 text-center md:text-left">
                Hey, I&apos;m Jacob Leon
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <h2 className="text-3xl md:text-4xl text-[var(--accent)] font-semibold">
                    Full-stack Developer
                  </h2>
                  <p className="text-xl text-[var(--text-secondary)] m-0">
                    Front-end and Back-end development
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)] text-lg justify-center md:justify-start">
                  <MapPin size={20} />
                  <span>Owasso, Oklahoma</span>
                </div>
                <div className="flex gap-8 justify-center md:justify-start">
                  <a
                    href="https://github.com/jacobleon2117"
                    className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/jacobleon02"
                    className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="mailto:jacobleon2117@gmail.com"
                    className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
