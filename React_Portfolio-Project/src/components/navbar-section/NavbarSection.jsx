import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import styles from './NavbarSection.module.css';

const NavbarSection = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#" className={styles.logo}>{'</J>'}</a>
          
          <div className={styles.desktopNav}>
            <a href="#about">About</a>
            <a href="#tech">Tech Stack</a>
            <a href="#projects">Projects</a>
          </div>

          <div className={styles.navRight}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

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
          className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
          onClick={closeMenu}
        />
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
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
              <a href="#projects" className={styles.menuItem} onClick={closeMenu}>
                Projects
              </a>
              <a href="#contact" className={styles.menuItem} onClick={closeMenu}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

NavbarSection.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default NavbarSection;