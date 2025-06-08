import { Project } from '../types/project';

export const projectsData: Project[] = [
  
  {
    id: 1,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts',
    longDescription: 'A responsive weather application that provides detailed weather information, forecasts, and beautiful visualizations. Includes geolocation support and multiple city tracking.',
    image: '/assets/images/projects/wheater.jpg',
    technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'Geolocation'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather-dashboard-demo.com',
    featured: false,
    category: 'web'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio with modern design and animations',
    longDescription: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode toggle, and optimized performance.',
    image: '/assets/images/projects/ankit_port.png',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Framer Motion'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    featured: false,
    category: 'web'
  }
];