/ANKIT/REACT/my-portfolio/README.md -->
# My Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing professional web development skills and projects.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **TypeScript**: Fully typed for better development experience
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 🏗️ Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── assets/            # Images and other assets
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── data/             # Static data
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: CSS Modules, CSS Custom Properties
- **Icons**: React Icons (Feather Icons)
- **Animations**: CSS animations and transitions
- **Build Tool**: Create React App
- **Code Quality**: ESLint, TypeScript

## 📱 Sections

1. **Hero** - Introduction with animated typewriter effect
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with animated progress bars
4. **Experience** - Professional work history timeline
5. **Projects** - Portfolio projects with filtering
6. **Contact** - Contact form and information

## 🎨 Customization

### Personal Information
Update your personal information in:
- `src/data/` - All data files
- `src/components/sections/Hero/Hero.tsx` - Hero section
- `src/components/sections/About/About.tsx` - About section

### Styling
- Global variables: `src/styles/variables.css`
- Component styles: Each component has its own `.module.css` file

### Adding Projects
Add new projects to `src/data/projects.ts`:

```typescript
{
  id: 5,
  title: 'Your Project',
  description: 'Brief description',
  longDescription: 'Detailed description',
  image: '/assets/images/projects/your-project.jpg',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://your-project.com',
  featured: true,
  category: 'web'
}
```

## 📧 Contact Form Integration

The contact form is ready for integration with:
- **EmailJS** - For client-side email sending
- **Netlify Forms** - For form handling on Netlify
- **Custom Backend** - Your own API endpoint

Update the form submission logic in `src/components/sections/Contact/Contact.tsx`.

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Deploy automatically on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Ankit Kumar**
- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Ankit Kumar](https://linkedin.com/in/yourusername)

---

⭐️ If you found this helpful, please give it a star!