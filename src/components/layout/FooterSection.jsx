import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] py-8 border-t border-[var(--border)] w-full mt-auto">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/jacobleon2117"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/jacobleon02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:jacobleon2117@gmail.com"
              aria-label="Email"
              className="text-[var(--text-secondary)] transition-all duration-200 p-2 -m-2 hover:text-[var(--accent)] hover:translate-y-[-2px]"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <p className="text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} Jacob Leon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
