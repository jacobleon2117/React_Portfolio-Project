import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSun, FaMoon, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './NavbarSection.module.css';

const MobileNavbar = ({ isOpen, onClose, theme, onThemeToggle }) => {
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [showViewPrompt, setShowViewPrompt] = useState(false);

  const handleLinkClick = () => {
    onClose();
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowDownloadPrompt(true);
  };

  const handleViewClick = (e) => {
    e.preventDefault();
    setShowViewPrompt(true);
  };

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <a href="#" className={styles.logo}>{'<'}{'/'}{`J`}{'>'}</a>
          <button 
            onClick={onThemeToggle} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <nav className={styles.menuItems}>
          <a href="#about" className={styles.menuItem} onClick={handleLinkClick}>
            About
          </a>
          <a href="#tech" className={styles.menuItem} onClick={handleLinkClick}>
            Tech Stack
          </a>
          <a href="#projects" className={styles.menuItem} onClick={handleLinkClick}>
            Projects
          </a>

          <div className={styles.menuDivider} />
          
          <div className={styles.resumeSection}>
            <h3 className={styles.resumeTitle}>Resume</h3>
            <div className={styles.resumeActions}>
              <button 
                className={styles.resumeActionBtn} 
                onClick={handleDownloadClick}
              >
                <FaDownload size={20} />
                <span>Download</span>
              </button>
              <button 
                className={styles.resumeActionBtn}
                onClick={handleViewClick}
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
                    onClose();
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
                      onClose();
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
  );
};

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onThemeToggle: PropTypes.func.isRequired
};

export default MobileNavbar;