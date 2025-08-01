import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaExternalLinkAlt,
  FaChevronDown,
} from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import LogoTypingAnimation from "../common/LogoTypingAnimation";

const NavbarSection = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

  const resumePath = "/Jacob_Leon-Resume.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
        setIsScrolled(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
      }

      if (
        isResumeDropdownOpen &&
        Math.abs(currentScrollPos - prevScrollPos) > 10
      ) {
        setIsResumeDropdownOpen(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

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

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, isMenuOpen, isResumeDropdownOpen]);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleResumeDropdown = () => {
    setIsResumeDropdownOpen(!isResumeDropdownOpen);
  };

  const handleViewResume = () => {
    window.open(resumePath, "_blank", "noopener,noreferrer");
    setIsResumeDropdownOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Jacob_Leon-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsResumeDropdownOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transform transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "backdrop-blur-md bg-[var(--bg)]/50" : "bg-transparent"
      }`}
    >
      <nav className={`h-[var(--navbar-height)] transition-all duration-300`}>
        <div className="max-w-5xl mx-auto px-8 h-full relative z-50">
          <div className="w-full h-full hidden md:flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center justify-center font-bold text-[var(--accent)] transition-colors duration-200 hover:text-[var(--text)]"
              aria-label="Home"
            >
              <div className="w-[60px] text-center">
                <LogoTypingAnimation />
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={handleThemeToggle}
                className="bg-transparent border-none p-2 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <div className="p-2 rounded-full hover:bg-yellow-400/20">
                    <FiSun size={20} className="text-yellow-400" />
                  </div>
                ) : (
                  <div className="p-2 rounded-full hover:bg-cyan-800/20">
                    <FiMoon size={20} className="text-cyan-800" />
                  </div>
                )}
              </button>
              <div className="relative">
                <button
                  id="resume-button"
                  onClick={toggleResumeDropdown}
                  className="flex items-center gap-2 px-4 py-2 text-[var(--text)] font-medium rounded-lg transition-all duration-200 border border-[var(--border)] bg-[var(--bg-secondary)] cursor-pointer hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                  aria-expanded={isResumeDropdownOpen}
                  aria-haspopup="true"
                >
                  Resume
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      isResumeDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id="resume-dropdown"
                  className={`absolute top-full right-0 mt-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-2 min-w-48 shadow-lg transition-all duration-200 z-50 ${
                    isResumeDropdownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible pointer-events-none"
                  }`}
                >
                  <button
                    onClick={handleViewResume}
                    className="flex items-center gap-2 p-3 text-[var(--text)] bg-transparent border-none cursor-pointer transition-all duration-200 rounded-lg text-sm w-full text-left hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  >
                    <FaExternalLinkAlt size={14} />
                    View in New Tab
                  </button>
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center gap-2 p-3 text-[var(--text)] bg-transparent border-none cursor-pointer transition-all duration-200 rounded-lg text-sm w-full text-left hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  >
                    <FaDownload size={14} />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:hidden flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center justify-center font-bold text-[var(--accent)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
              aria-label="Home"
            >
              <div className="w-[60px] text-center">
                <LogoTypingAnimation />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={handleThemeToggle}
                className="bg-transparent border-none p-2 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <div className="p-2 rounded-full hover:bg-yellow-400/20">
                    <FiSun size={20} className="text-yellow-400" />
                  </div>
                ) : (
                  <div className="p-2 rounded-full hover:bg-gray-700/20">
                    <FiMoon size={20} className="text-gray-700" />
                  </div>
                )}
              </button>

              <button
                className="flex bg-transparent border-none text-[var(--text)] cursor-pointer p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
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
          className={`fixed top-0 right-0 w-full max-w-sm h-screen bg-[var(--bg)] z-50 transform transition-transform duration-300 shadow-xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={closeMenu}
                className="bg-transparent border-none text-[var(--text)] cursor-pointer p-2 flex items-center justify-center transition-all duration-200 hover:text-[var(--accent)]"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-lg text-[var(--text)] no-underline p-4 rounded-lg transition-all duration-200 font-medium hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 mb-8 mx-4">
              <div className="border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] p-4">
                <h3 className="text-lg font-medium text-[var(--text)] mb-4">
                  Resume
                </h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      handleViewResume();
                      closeMenu();
                    }}
                    className="flex items-center gap-3 py-3 px-4 text-[var(--text)] bg-transparent border-none cursor-pointer transition-all duration-200 rounded-lg text-sm w-full text-left hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>View Resume in New Tab</span>
                  </button>
                  <button
                    onClick={() => {
                      handleDownloadResume();
                      closeMenu();
                    }}
                    className="flex items-center gap-3 py-3 px-4 text-[var(--text)] bg-transparent border-none cursor-pointer transition-all duration-200 rounded-lg text-sm w-full text-left hover:bg-[var(--hover)] hover:text-[var(--accent)]"
                  >
                    <FaDownload size={16} />
                    <span>Download Resume PDF</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-auto pb-8"></div>
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
