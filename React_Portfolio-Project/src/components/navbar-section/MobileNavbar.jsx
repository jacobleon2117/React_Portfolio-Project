import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './NavbarSection.module.css';

const MobileNavbar = ({ isOpen, onClose, theme, onThemeToggle }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <a href="#" className={styles.logo}>{'</J>'}</a>
          <button 
            onClick={onThemeToggle} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <nav className={styles.menuItems}>
          <a 
            href="#about" 
            className={styles.menuItem}
            onClick={handleLinkClick}
          >
            About
          </a>
          <a 
            href="#tech" 
            className={styles.menuItem}
            onClick={handleLinkClick}
          >
            Tech Stack
          </a>
          <a 
            href="#projects" 
            className={styles.menuItem}
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={styles.menuItem}
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
