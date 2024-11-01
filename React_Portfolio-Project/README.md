<a id="readme-top"></a>

<h1 align="left">Modern React Portfolio</h1>
  <a href="https://github.com/jacobleon2117/React_Portfolio-Project">
    <img src="public/images/portfolio-picture.png" alt="Logo" width="1200">
  </a>
  <br />
  <p align="center">
    A modern, responsive portfolio website built with React, featuring dynamic themes, particle effects, and smooth animations
    <br />
    <a href="https://github.com/jacobleon2117/React_Portfolio-Project"><strong>documentation »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jacobleon2117/React_Portfolio-Project">Demo</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Portfolio Screen Shot][product-screenshot]](https://example.com)

A modern and responsive portfolio website showcasing my skills and projects. Features include:

- Dynamic dark/light theme switching
- Interactive particle background
- Responsive design for all devices
- Animated UI components
- Project showcase with live demos
- Tech stack display with interactive cards

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- npm
  ```sh
    npm install npm@latest -g
  ```

### Installation

- Clone
  ```sh
    git clone https://github.com/jacobleon2117/React_Portfolio-Project.git
  ```
- Install NPM packages
  ```sh
    npm install
  ```
- Start the development server
  ```sh
    npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here are some key features and their implementations:

### Theme Switching

```jsx
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "light" ? "dark" : "light"
  );
};
```

### Particle Background

```jsx
<Particles
  className="absolute inset-0"
  quantity={150}
  staticity={40}
  ease={50}
  color="#60a5fa"
/>
```

### Responsive Navigation

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isVisible, setIsVisible] = useState(true);

// Smart scroll handling
useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [prevScrollPos]);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
