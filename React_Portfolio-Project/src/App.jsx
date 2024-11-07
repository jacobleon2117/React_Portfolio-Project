import { useState, useEffect } from 'react'
import NavbarSection from './components/navbar-section/NavbarSection'
import HeroSection from './components/hero-section/HeroSection'
import AboutSection from './components/about-section/AboutSection'
import TechSection from './components/tech-section/TechSection'
import ProjectSection from './components/project-section/ProjectSection'
import FooterSection from './components/footer-section/FooterSection'
import './styles/globals.css'

function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // Update document theme
    document.documentElement.setAttribute('data-theme', theme)
    
    // Update favicon
    window.updateFavicon?.(theme === 'dark')
    
    // Save theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <NavbarSection theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App