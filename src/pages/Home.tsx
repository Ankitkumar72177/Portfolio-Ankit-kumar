 import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Palette, Zap, Star, ArrowRight, Sparkles, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Clipboard Manager",
      description: "A feature-rich clipboard manager that provides an efficient way to store, organize, and retrieve clipboard history.",
      image: "/src/pages/project_1.png",
      tags: ["React", "LocalStorage", "UI/UX", "Web App"],
    },
    {
      id: 2,
      title: "Modern Portfolio Website",
      description: "A sleek, responsive portfolio website designed to showcase professional work with elegant animations and intuitive navigation.",
      image: "/src/pages/project_2.png",
      tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
    },
    {
      id: 3,
      title: "Profile Card",
      description: "An elegant and interactive profile card component that displays personal information in a stylish, responsive layout.",
      image: "/src/pages/project_3.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    }
  ];

  const skills = [
    { icon: Code, name: "Frontend Development", color: "text-blue-500" },
    { icon: Palette, name: "UI/UX Design", color: "text-purple-500" },
    { icon: Zap, name: "Performance Optimization", color: "text-yellow-500" },
  ];
  
  // Add state to control the rendering and prevent flickering
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted state to true after initial render
    setMounted(true);
  }, []);

  return (
    <div className="page-section active space-y-0 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements - Only render after mounting */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "100ms", animationFillMode: "forwards" }}></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "300ms", animationFillMode: "forwards" }}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "500ms", animationFillMode: "forwards" }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-full blur-2xl animate-float opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "700ms", animationFillMode: "forwards" }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-400/5 to-red-500/5 rounded-full blur-2xl animate-float opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "900ms", animationFillMode: "forwards" }}></div>
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "1100ms", animationFillMode: "forwards" }}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 animate-fade-in" style={{ animationDuration: "2s", animationDelay: "1300ms", animationFillMode: "forwards" }}></div>
        </div>
      )}

      {/* Hero Section - Optimized to prevent flickering */}
      <section className="relative flex flex-col items-center text-center space-y-8 py-20 md:py-32">
        {/* Enhanced Floating Stars - Only rendered after mounting */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Star className="absolute top-20 left-20 w-4 h-4 text-yellow-400 animate-bounce-slow opacity-0 animate-fade-in" style={{ animationDelay: "1s" }} />
            <Star className="absolute top-32 right-32 w-3 h-3 text-blue-400 animate-float opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }} />
            <Star className="absolute bottom-40 left-1/4 w-5 h-5 text-purple-400 animate-float-reverse opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }} />
            <Star className="absolute bottom-20 right-1/4 w-4 h-4 text-pink-400 animate-bounce-slow opacity-0 animate-fade-in" style={{ animationDelay: "1.6s" }} />
            <Star className="absolute top-1/2 left-10 w-3 h-3 text-green-400 animate-float opacity-0 animate-fade-in" style={{ animationDelay: "1.8s" }} />
            <Star className="absolute top-3/4 right-20 w-4 h-4 text-indigo-400 animate-float-reverse opacity-0 animate-fade-in" style={{ animationDelay: "2s" }} />
          </div>
        )}

        <div className="relative z-10 space-y-6">
          <div className="animate-fade-in" style={{ animationDuration: "500ms" }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ankit Kumar
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDuration: "800ms", animationDelay: "200ms" }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] leading-relaxed">
              A <span className="text-blue-500 font-semibold">developer</span>, <span className="text-purple-500 font-semibold">designer</span>, and <span className="text-pink-500 font-semibold">creative thinker</span> passionate about building exceptional digital experiences.
            </p>
          </div>

          {/* Enhanced Skills Icons - Optimized to prevent flickering */}
          {mounted && (
            <div className="flex justify-center space-x-8 py-8 opacity-0 animate-fade-in" style={{ animationDuration: "1s", animationDelay: "400ms", animationFillMode: "forwards" }}>
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center space-y-3 group cursor-pointer">
                  <div className="relative p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color === 'text-blue-500' ? 'from-blue-500/20' : skill.color === 'text-purple-500' ? 'from-purple-500/20' : 'from-yellow-500/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <skill.icon className={`w-7 h-7 ${skill.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                    {/* Floating particles around icon - simplified */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 block">
                      {skill.name.split(' ')[0]}
                    </span>
                    <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                      {skill.name.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDuration: "1s", animationDelay: "600ms", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 transition-all duration-300">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 animate-fade-in relative" style={{ animationDelay: "200ms" }}>
        {/* Enhanced Floating particles for featured section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-10 left-1/4 w-6 h-6 text-blue-400/30 animate-float hover:text-blue-400/50 transition-colors duration-300" style={{ animationDelay: "1s" }} />
          <Sparkles className="absolute top-20 right-1/3 w-4 h-4 text-purple-400/30 animate-bounce-slow hover:text-purple-400/50 transition-colors duration-300" style={{ animationDelay: "2s" }} />
          <Sparkles className="absolute bottom-20 left-1/3 w-5 h-5 text-pink-400/30 animate-float-reverse hover:text-pink-400/50 transition-colors duration-300" style={{ animationDelay: "3s" }} />
          <Sparkles className="absolute top-1/2 right-10 w-4 h-4 text-green-400/30 animate-float hover:text-green-400/50 transition-colors duration-300" style={{ animationDelay: "4s" }} />
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-500/20 rounded-full animate-gentle-pulse" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-purple-500/20 rounded-full animate-gentle-pulse" style={{ animationDelay: "3.5s" }}></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <div className="featured-section-badge inline-flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <Rocket className="w-5 h-5 text-blue-500 animate-gentle-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </div>
          <h2 className="featured-title-enhanced text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            Discover my latest creations where innovation meets design, crafted with passion and precision
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}></div>
        </div>

        <div className="projects-grid px-4">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card-enhanced group text-card-foreground"
              style={{ animationDelay: `${500 + index * 150}ms` }}
            >
              <div className="project-image-container rounded-t-xl">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image-enhanced object-cover w-full h-full"
                  />
                </AspectRatio>
                
                {/* Enhanced overlay with gradient and effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative z-10 space-y-4">
                {/* Enhanced tags section */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className="tag-enhanced"
                      style={{ animationDelay: `${700 + index * 150 + tagIndex * 50}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Enhanced title with better typography */}
                <h3 className="project-title-enhanced font-serif text-xl md:text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="project-description-enhanced text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 relative z-10">
                <Button 
                  asChild 
                  className="project-button-enhanced w-full group/btn"
                >
                  <Link to={`/projects/${project.id}`} className="flex items-center justify-center gap-2">
                    <Rocket className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="font-medium">View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <div className="inline-flex flex-col items-center gap-4">
            {/* Decorative line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <Button 
              asChild 
              size="lg"
              className="project-button-enhanced rounded-full px-8 py-3 text-base font-medium group border-2 border-blue-500/30 hover:border-blue-500/50 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/70 dark:hover:to-purple-900/70 text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
            >
              <Link to="/projects" className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-5 h-5 opacity-20" />
                  </div>
                </div>
                <span>Explore All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            {/* Enhanced stats or additional info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>12+ Projects</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section removed as requested */}
    </div>
  );
};

export default Home;
