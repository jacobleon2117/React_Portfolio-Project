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
import styles from "./NavbarSection.module.css";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#" className={styles.logo}>
            {"<"}
            {"/"}
            {"J"}
            {">"}
          </a>

          <div className={styles.desktopNav}>
            <a href="#about">About</a>
            <a href="#tech">Tech Stack</a>
            <a href="#projects">Projects</a>
          </div>

          <div className={styles.navRight}>
            <button
              onClick={handleThemeToggle}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <div className={styles.resumeWrapper}>
              <button
                className={styles.resumeButton}
                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                onMouseEnter={() => setIsResumeDropdownOpen(true)}
                onMouseLeave={() => setIsResumeDropdownOpen(false)}
              >
                Resume <FaChevronDown size={12} />
              </button>

              <div
                className={`${styles.resumeDropdown} ${
                  isResumeDropdownOpen ? styles.show : ""
                }`}
                onMouseEnter={() => setIsResumeDropdownOpen(true)}
                onMouseLeave={() => setIsResumeDropdownOpen(false)}
              >
                <a
                  href="/JacobLeon-Resume.pdf"
                  className={styles.dropdownItem}
                  download
                >
                  <FaDownload size={14} />
                  Download PDF
                </a>
                <a
                  href="/JacobLeon-Resume.pdf"
                  className={styles.dropdownItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={14} />
                  View in New Tab
                </a>
              </div>
            </div>

            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`}
          onClick={closeMenu}
        />
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <div className={styles.menuContent}>
            <div className={styles.menuHeader}>
              <button
                onClick={closeMenu}
                className={styles.closeButton}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <nav className={styles.menuItems}>
              <a href="#about" className={styles.menuItem} onClick={closeMenu}>
                About
              </a>
              <a href="#tech" className={styles.menuItem} onClick={closeMenu}>
                Tech Stack
              </a>
              <a
                href="#projects"
                className={styles.menuItem}
                onClick={closeMenu}
              >
                Projects
              </a>

              <div className={styles.menuDivider} />

              <div className={styles.resumeSection}>
                <h3 className={styles.resumeTitle}>Resume</h3>
                <div className={styles.resumeActions}>
                  <button
                    className={styles.resumeActionBtn}
                    onClick={handleMobileDownloadClick}
                  >
                    <FaDownload size={20} />
                    <span>Download</span>
                  </button>
                  <button
                    className={styles.resumeActionBtn}
                    onClick={handleMobileViewClick}
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </nav>
            {showDownloadPrompt && (
              <div className={styles.promptOverlay}>
                <div className={styles.prompt}>
                  <p>Download resume?</p>
                  <div className={styles.promptActions}>
                    <a
                      href="/JacobLeon-Resume.pdf"
                      download
                      onClick={() => {
                        setShowDownloadPrompt(false);
                        closeMenu();
                      }}
                      className={styles.promptBtn}
                    >
                      Yes
                    </a>
                    <button
                      onClick={() => setShowDownloadPrompt(false)}
                      className={styles.promptBtn}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showViewPrompt && (
              <div className={styles.promptOverlay}>
                <div className={styles.prompt}>
                  <p>View resume in new tab?</p>
                  <div className={styles.promptActions}>
                    <a
                      href="/JacobLeon-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setShowViewPrompt(false);
                        closeMenu();
                      }}
                      className={styles.promptBtn}
                    >
                      Yes
                    </a>
                    <button
                      onClick={() => setShowViewPrompt(false)}
                      className={styles.promptBtn}
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
