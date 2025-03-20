# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and styled with Tailwind CSS. This portfolio showcases projects, skills, and resume information with a clean, professional design that includes both light and dark mode support.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Theme Switching**: Toggle between light and dark mode
- **Animated Navigation**: Navbar hides on scroll down and reappears on scroll up
- **Mobile-Friendly Navigation**: Custom mobile menu with smooth transitions
- **Resume Access**: Multiple ways to view and download resume (dropdown menu and dedicated mobile section)
- **Dynamic Components**: Includes animations and interactive elements

## Technologies Used

- React
- React Router
- Tailwind CSS
- React Icons
- CSS Variables for theming

## Component Structure

The application is organized into several key components:

- **NavbarSection**: Navigation bar with theme toggle, resume dropdown, and mobile menu
- **LogoTypingAnimation**: Animated logo component
- **AboutSection**: Personal information and skills
- **ProjectsSection**: Portfolio of work and projects
- **Other sections**: Contact, footer, etc.

## Recent Updates

- Improved mobile navigation menu layout and accessibility
- Added dedicated Resume card in mobile navigation with accent border
- Made resume options consistent between desktop dropdown and mobile menu
- Removed redundant logo from mobile menu when open
- Enhanced visual hierarchy with styled section headers

## Installation and Setup

1. Clone the repository
```bash
git clone https://github.com/jacobleon2117/React_Portfolio-Project.git
cd React_Portfolio-Project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## Customization

### Theming

The application uses CSS variables for theming. Edit the `:root` selector in your CSS to customize colors:

```css
:root {
  --bg: #ffffff;
  --bg-secondary: #f3f4f6;
  --text: #374151;
  --text-secondary: #6b7280;
  --accent: #3b82f6; /* The primary blue accent color */
  --border: #e5e7eb;
  --hover: #f3f4f6;
}

[data-theme="dark"] {
  --bg: #111827;
  --bg-secondary: #1f2937;
  --text: #f3f4f6;
  --text-secondary: #9ca3af;
  --accent: #3b82f6; /* Same accent for consistency */
  --border: #374151;
  --hover: #1f2937;
}
```

### Content

Update your personal information, projects, and resume by editing the relevant component files.

## Deployment

This project can be deployed to services like Vercel, Netlify, or GitHub Pages. For example, to deploy to Netlify:

1. Push your code to a GitHub repository
2. Connect Netlify to your GitHub account
3. Select the repository and configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build` or `dist` (depending on your configuration)

## License

MIT License

## Contact

Jacob Leon - [jacobleon2117@gmail.com](mailto:jacobleon2117@gmail.com)

Project Link: [https://github.com/jacobleon2117/React_Portfolio-Project](https://github.com/jacobleon2117/React_Portfolio-Project)