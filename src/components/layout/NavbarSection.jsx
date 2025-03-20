import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaDownload,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import LogoTypingAnimation from "../common/LogoTypingAnimation";

const NavbarSection = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [showViewPrompt, setShowViewPrompt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        setIsVisible(true);
      } else if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      const resumeButton = document.getElementById("resume-button");
      const resumeDropdown = document.getElementById("resume-dropdown");

      if (
        resumeButton &&
        resumeDropdown &&
        !resumeButton.contains(e.target) &&
        !resumeDropdown.contains(e.target)
      ) {
        setIsResumeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos]);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleResumeDropdown = () => {
    setIsResumeDropdownOpen(!isResumeDropdownOpen);
  };

  const handleMobileDownloadClick = (e) => {
    e.preventDefault();
    setShowDownloadPrompt(true);
  };

  const handleMobileViewClick = (e) => {
    e.preventDefault();
    setShowViewPrompt(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="h-[var(--navbar-height)] bg-[var(--card)] border-b border-[var(--border)] transition-colors duration-200">
        <div className="container h-full flex items-center justify-between px-8 max-w-7xl mx-auto">
          <a
            href="/"
            className="flex items-center justify-center min-w-[60px] font-bold text-[var(--accent)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
            aria-label="Home"
          >
            <div className="w-[60px] text-center">
              <LogoTypingAnimation />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a
              href="/"
              className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)] py-2"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)] py-2"
            >
              About
            </a>
            <a
              href="#tech"
              className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)] py-2"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)] py-2"
            >
              Projects
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleThemeToggle}
              className="bg-transparent border-none text-[var(--text)] cursor-pointer p-2 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[var(--hover)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <div className="hidden md:block relative mx-4">
              <button
                id="resume-button"
                className="flex items-center gap-2 px-4 py-2 text-[var(--accent)] font-medium rounded-lg transition-all duration-200 border border-[var(--accent)] bg-transparent cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--bg)]"
                onClick={toggleResumeDropdown}
                aria-expanded={isResumeDropdownOpen}
                aria-haspopup="true"
              >
                Resume <FaChevronDown size={12} />
              </button>

              <div
                id="resume-dropdown"
                className={`absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-2 min-w-40 shadow-lg transition-all duration-200 ${
                  isResumeDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <a
                  href="/JacobLeon-Resume.pdf"
                  className="flex items-center gap-2 p-2 text-[var(--text)] no-underline transition-all duration-200 rounded-lg text-sm hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  download
                >
                  <FaDownload size={14} />
                  Download PDF
                </a>
                <a
                  href="/JacobLeon-Resume.pdf"
                  className="flex items-center gap-2 p-2 text-[var(--text)] no-underline transition-all duration-200 rounded-lg text-sm hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={14} />
                  View in New Tab
                </a>
              </div>
            </div>

            <button
              className="md:hidden flex bg-transparent border-none text-[var(--text)] cursor-pointer p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={closeMenu}
        />
        <div
          className={`fixed top-0 right-0 w-full max-w-sm h-screen bg-[var(--bg)] border-l border-[var(--border)] z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 h-full flex flex-col gap-8">
            <div className="flex justify-end pb-4 border-b border-[var(--border)]">
              <button
                onClick={closeMenu}
                className="bg-transparent border-none text-[var(--text)] cursor-pointer p-2 flex items-center justify-center"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <a
                href="/"
                className="text-lg text-[var(--text)] no-underline p-4 rounded-lg transition-all duration-200 font-medium hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-lg text-[var(--text)] no-underline p-4 rounded-lg transition-all duration-200 font-medium hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#tech"
                className="text-lg text-[var(--text)] no-underline p-4 rounded-lg transition-all duration-200 font-medium hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                onClick={closeMenu}
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                className="text-lg text-[var(--text)] no-underline p-4 rounded-lg transition-all duration-200 font-medium hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                onClick={closeMenu}
              >
                Projects
              </a>

              <div className="h-px bg-[var(--border)] my-4 w-full" />

              <div className="px-4 py-2">
                <h3 className="text-lg text-[var(--text)] mb-4">Resume</h3>
                <div className="flex gap-4">
                  <button
                    className="flex flex-col items-center gap-2 p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 flex-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    onClick={handleMobileDownloadClick}
                  >
                    <FaDownload size={20} />
                    <span>Download</span>
                  </button>
                  <button
                    className="flex flex-col items-center gap-2 p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 flex-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    onClick={handleMobileViewClick}
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </nav>
            {showDownloadPrompt && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
                <div className="bg-[var(--bg)] p-6 rounded-lg text-center w-10/12 max-w-xs">
                  <p className="mb-6 text-[var(--text)]">Download resume?</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="/JacobLeon-Resume.pdf"
                      download
                      onClick={() => {
                        setShowDownloadPrompt(false);
                        closeMenu();
                      }}
                      className="px-6 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 no-underline hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Yes
                    </a>
                    <button
                      onClick={() => setShowDownloadPrompt(false)}
                      className="px-6 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showViewPrompt && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
                <div className="bg-[var(--bg)] p-6 rounded-lg text-center w-10/12 max-w-xs">
                  <p className="mb-6 text-[var(--text)]">
                    View resume in new tab?
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="/JacobLeon-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setShowViewPrompt(false);
                        closeMenu();
                      }}
                      className="px-6 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 no-underline hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Yes
                    </a>
                    <button
                      onClick={() => setShowViewPrompt(false)}
                      className="px-6 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

NavbarSection.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default NavbarSection;
