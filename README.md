# 🚀 Jayadev Vasudevan - Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://jayadevvasudevan.github.io)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-teal?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

> Modern, responsive portfolio website showcasing software development and data engineering expertise with 4+ years of production operations experience.

## 🌟 Live Demo

**[Visit Portfolio →](https://jayadevvasudevan.github.io)**

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Color Palette](#-color-palette)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 👨‍💻 About

This portfolio website belongs to **Jayadev Vasudevan**, a passionate Software Developer and Data Engineer with expertise in:

- **Languages**: Python, PySpark, Scala
- **Technologies**: Apache Airflow, Spark, Hive, Impala, Camunda, Snowflake
- **Focus Areas**: Data Engineering, ETL Processes, Production Operations
- **Experience**: 4+ years in production environments

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Custom Color Palette**: Carefully chosen colors for professional appearance
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Dark/Light Mode**: Theme switching capability (if implemented)

### 🧩 **Sections**
- **Hero Section**: Professional introduction with key skills
- **Skills Section**: Interactive display of technical competencies
- **About Section**: Detailed background and expertise
- **Experience Section**: Professional journey and achievements
- **Projects Section**: Showcase of notable work and contributions
- **Services Section**: Available professional services
- **Achievements Section**: Testimonials and recognition
- **Contact Form**: Direct communication channel

### ⚡ **Performance**
- **Fast Loading**: Optimized with Vite build system
- **Modern Bundle**: Tree-shaking and code splitting
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript for better development experience

### **Build & Development**
- **Vite 5.4.1** - Next-generation frontend build tool
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization

### **Styling & UI**
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful & consistent icon library
- **class-variance-authority** - Component variant management

### **Additional Libraries**
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **React Hook Form** - Form handling with validation
- **Lottie React** - Animations and micro-interactions
- **Embla Carousel** - Touch-friendly carousel component

## 🎨 Color Palette

The website uses a carefully curated color palette for a professional yet warm appearance:

```css
/* Primary Colors */
--primary: #5D688A      /* Dark Blue-Gray - Professional elements */
--secondary: #F7A5A5    /* Soft Pink - Accent highlights */
--tertiary: #FFDBB6     /* Warm Cream - Background elements */
--background: #FFF2EF   /* Very Light Pink - Main background */

/* Supporting Colors */
--text-primary: #2D3748    /* Dark gray for headings */
--text-secondary: #4A5568  /* Medium gray for body text */
--text-light: #718096      /* Light gray for secondary text */
```

### **Color Usage Strategy**
- **Primary (#5D688A)**: Buttons, links, important UI elements
- **Secondary (#F7A5A5)**: Highlights, hover states, creative elements
- **Tertiary (#FFDBB6)**: Card backgrounds, form inputs, subtle emphasis
- **Background (#FFF2EF)**: Page background, content areas

## 🚀 Getting Started

### **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **bun** package manager
- **Git** for version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayadevvasudevan/jayadevvasudevan.github.io.git
   cd jayadevvasudevan.github.io
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using bun (faster)
   bun install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Or using bun
   bun run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 💻 Development

### **Available Scripts**

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Lint code for issues
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

### **Development Workflow**

1. **Create a new branch** for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the existing code style

3. **Test your changes** locally
   ```bash
   npm run dev
   ```

4. **Lint your code**
   ```bash
   npm run lint
   ```

5. **Build and test production version**
   ```bash
   npm run build
   npm run preview
   ```

6. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

## 🚢 Deployment

### **GitHub Pages (Automatic) ⭐ Recommended**

This site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - triggers automatic deployment via GitHub Actions
2. **Build process** runs on GitHub's servers using the workflow in `.github/workflows/deploy.yml`
3. **Live site** updates automatically at `https://jayadevvasudevan.github.io`

```bash
# Deploy your changes
git add .
git commit -m "feat: your update description"
git push origin main

# Your site will be automatically deployed! 🚀
```

### **Manual Deployment**

If you prefer manual deployment:

```bash
# Build and deploy to GitHub Pages manually
npm run deploy
```

### **Local Preview of Production Build**

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### **Alternative Deployments**

The built site (`dist/` folder) can also be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **AWS S3**: Upload `dist` contents to S3 bucket with static hosting
- **Any static hosting**: Upload `dist` folder contents

### **Important Notes for GitHub Pages**
- ✅ **Base path**: Configured for user GitHub Pages site (`/`)
- ✅ **SPA routing**: Client-side routing support added with `404.html`
- ✅ **Auto-deployment**: GitHub Actions workflow configured
- ✅ **Asset optimization**: Vite handles bundling and minification

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📁 Project Structure

```
jayadevvasudevan.github.io/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── favicon.ico        # Site favicon
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Radix UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Footer.tsx    # Footer component
│   │   └── ...           # Other sections
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main page
│   │   └── NotFound.tsx  # 404 page
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── dist/                 # Production build output
├── .github/              # GitHub Actions workflows
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### **Reporting Bugs**
1. Check existing issues first
2. Create a detailed bug report with steps to reproduce
3. Include screenshots if applicable

### **Suggesting Features**
1. Open an issue with the "enhancement" label
2. Describe the feature and its benefits
3. Provide mockups or examples if possible

### **Code Contributions**
1. Fork the repository
2. Create a feature branch
3. Make your changes following the existing code style
4. Add tests if applicable
5. Submit a pull request with a clear description

### **Code Style Guidelines**
- Use **TypeScript** for all new components
- Follow **React functional components** with hooks
- Use **Tailwind CSS** for styling
- Keep components **small and focused**
- Add **proper TypeScript types**
- Write **descriptive commit messages**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌐 Connect

- **Portfolio**: [jayadevvasudevan.github.io](https://jayadevvasudevan.github.io)
- **LinkedIn**: [jayadev-v-3472621b2](https://www.linkedin.com/in/jayadev-v-3472621b2/)
- **GitHub**: [jayadevvasudevan](https://github.com/jayadevvasudevan)
- **Behance**: [jayadev_v](https://www.behance.net/jayadev_v)

---

<div align="center">

**Built with ❤️ by Jayadev Vasudevan**

⭐ **Star this repository if you found it helpful!**

</div>