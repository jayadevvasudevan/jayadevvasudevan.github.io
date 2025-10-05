
import React from "react";
import { ExternalLink, Github, Database, Workflow, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Big Data Learning Environment - Hadoop Edge Node Setup",
      description: "A comprehensive learning workspace for installing, configuring, and mastering Hadoop edge nodes with integrated Big Data technologies including Hive, Spark, Impala, and related ecosystem tools.",
      image: "img/hadoop.png",
      technologies: ["Hadoop", "Docker", "Apache Hive", "Apache Spark", "Shell Scripts"],
      icon: Database,
      details: "Complete installation guides, Docker configurations, and automation scripts for setting up production-ready Big Data environments.",
      githubUrl: "https://github.com/jayadevvasudevan/hadoop-Setup",
      liveUrl: null
    },
    {
      title: "AjayDev Stories App - React Portfolio Website",
      description: "A modern React-based portfolio and blogging platform built with TypeScript, featuring user authentication, story creation, and interactive commenting system. Deployed on GitHub Pages with comprehensive CI/CD.",
      image: "img/achu app.png",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "GitHub Actions"],
      icon: TrendingUp,
      details: "Full-stack application with real-time database, authentication, and modern UI components with responsive design.",
      githubUrl: "https://github.com/Ajaydevv/ajaydevv.github.io",
      liveUrl: "https://ajaydevv.github.io"
    },
    {
      title: "Ollama Copilot Local - VS Code AI Extension",
      description: "A VS Code extension that provides GitHub Copilot-like code completions using Ollama running locally. Features streaming support, language-aware prompts, smart caching, and connection status indicators.",
      image: "img/ollama.png",
      technologies: ["TypeScript", "VS Code Extension API", "Ollama", "AI/ML", "Node.js"],
      icon: Workflow,
      details: "Local AI-powered code completions without sending code to external services, supporting multiple programming languages.",
      githubUrl: "https://github.com/jayadevvasudevan/ollama-copilot-local",
      liveUrl: null
    }
  ];

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Showcasing data engineering solutions that drive business value through 
            innovative technology implementations and optimization strategies.
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant animate-on-scroll">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="w-5 h-5 text-pulse-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 italic">
                        {project.details}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.liveUrl ? (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      ) : (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
