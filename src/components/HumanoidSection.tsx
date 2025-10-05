
import React, { useEffect, useRef, useState } from "react";
import { Database, Workflow, Code, BarChart3, Cloud, Cpu, Zap, Settings, Globe, Bot, Layers } from "lucide-react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Skills data
  const skillCategories = [
    {
      title: "Data Engineering & ETL",
      icon: Database,
      skills: ["Python", "PySpark", "Apache Airflow", "ETL Pipelines", "Data Validation", "Quality Checks"],
      description: "4+ years of professional experience building robust data pipelines and orchestrating complex workflows",
      bgImage: "/background-section1.png"
    },
    {
      title: "Big Data & Cloud Technologies",
      icon: BarChart3,
      skills: ["Apache Spark", "Apache Hive", "Apache Impala", "Scala", "Hadoop Ecosystem", "Snowflake", "Docker"],
      description: "Processing large-scale datasets efficiently in production environments with cloud integration",
      bgImage: "/background-section2.png"
    },
    {
      title: "Full-Stack Development",
      icon: Code,
      skills: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "GitHub Actions", "Shell Scripting"],
      description: "Modern web development with responsive design, CI/CD, and system automation",
      bgImage: "/background-section3.png"
    },
    {
      title: "AI & Development Tools",
      icon: Bot,
      skills: ["Ollama", "AI/ML Integration", "VS Code Extensions", "Local AI Models", "API Development", "Git"],
      description: "Building AI-powered tools and extensions for enhanced developer productivity",
      bgImage: "/background-section1.png"
    }
  ];

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress (faster transitions)
          if (progress >= 0.75) {
            setActiveCardIndex(3);
          } else if (progress >= 0.5) {
            setActiveCardIndex(2);
          } else if (progress >= 0.25) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '250vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="skills">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">💻</span>
                <span>Skills</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Technical Expertise
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isVisible = index === 0 ? isFirstCardVisible : 
                               index === 1 ? isSecondCardVisible : 
                               index === 2 ? isThirdCardVisible : isFourthCardVisible;
              
              return (
                <div 
                  key={index}
                  className={`absolute inset-0 overflow-hidden shadow-xl ${isVisible ? 'animate-card-enter' : ''}`} 
                  style={{
                    ...cardStyle,
                    zIndex: 10 + (index * 10),
                    transform: `translateY(${isVisible ? 
                      index === activeCardIndex ? (
                        index === 0 ? '90px' : 
                        index === 1 ? '60px' : 
                        index === 2 ? '30px' : '15px'
                      ) :
                      index < activeCardIndex ? '30px' : '200px' : '200px'}) scale(${index === activeCardIndex ? 1 : 0.9 + (index * 0.02)})`,
                    opacity: isVisible ? (index === activeCardIndex ? 1 : 0.9) : 0
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/40 to-purple-900/80"
                    style={{
                      backgroundImage: `url('${category.bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <IconComponent className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Expertise</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                    <div className="max-w-lg">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-6">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
