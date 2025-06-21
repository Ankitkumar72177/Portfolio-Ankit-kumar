
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Code, Globe, Rocket, ExternalLink, Github, Sparkles, Filter } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Clipboard Manager",
    description: "A feature-rich clipboard manager that provides an efficient way to store, organize, and retrieve clipboard history. Built with React, this application allows users to save text snippets, code blocks, and important information for quick access and reuse.",
    image: "/src/pages/project_1.png",
    tags: ["React", "LocalStorage", "UI/UX", "Web App"],
    url: "/projects/1",
    demoUrl: "https://clipboard-manager.netlify.app/",
    codeUrl: "https://github.com/Ankitkumar72177/Clipboard-Manager",
  },
  {
    id: 2,
    title: "Modern Portfolio Website",
    description: "A sleek, responsive portfolio website designed to showcase professional work with elegant animations and intuitive navigation. Features a customizable dark/light theme, responsive design for all devices, and optimized performance.",
    image: "/src/pages/project_2.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
    url: "/projects/2",
    demoUrl: "",
    codeUrl: "",
  },
  {
    id: 3,
    title: "Profile Card",
    description: "An elegant and interactive profile card component that displays personal information in a stylish, responsive layout. Features smooth hover effects, social media links, and a modern design aesthetic suitable for personal websites and portfolios.",
    image: "/src/pages/project_3.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "/projects/3",
    demoUrl: "https://ankitkumar72177.github.io/ProfileCard/",
    codeUrl: "https://github.com/Ankitkumar72177/ProfileCard",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple locations. Integrates with weather APIs and features interactive charts.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    tags: ["JavaScript", "API", "Chart.js"],
    url: "/projects/4",
    demoUrl: "https://weather-app.example.com",
  },
  {
    id: 5,
    title: "Recipe App",
    description: "A recipe discovery and saving app with search functionality and meal planning features. Users can create accounts to save favorite recipes and generate shopping lists.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    tags: ["React Native", "Redux", "Firebase"],
    url: "/projects/5",
    codeUrl: "https://github.com/username/recipe-app",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media platforms with data visualization and reporting. Features customizable widgets and export functionality.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    tags: ["Vue.js", "D3.js", "Node.js"],
    url: "/projects/6",
    demoUrl: "https://dashboard-demo.example.com",
    codeUrl: "https://github.com/username/social-dashboard",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              My Projects
            </h1>
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A curated collection of my work across web development, design, and innovative solutions. 
                Each project represents a unique challenge and creative solution.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent dark:via-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="relative mb-8 sm:mb-12">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Filter className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Filter Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Button 
                variant={filter === null ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter(null)}
                className={cn(
                  "rounded-full transition-all duration-300 hover:scale-105",
                  filter === null 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" 
                    : "hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700"
                )}
              >
                All Projects
              </Button>
              {allTags.map(tag => (
                <Button 
                  key={tag}
                  variant={filter === tag ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setFilter(tag)}
                  className={cn(
                    "rounded-full transition-all duration-300 hover:scale-105",
                    filter === tag 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" 
                      : "hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700"
                  )}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card-compact group text-card-foreground"
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              {/* Project Image */}
              <div className="project-image-compact rounded-t-xl overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with quick actions */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.demoUrl && (
                    <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg hover:scale-110 transition-transform duration-200">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg hover:scale-110 transition-transform duration-200">
                      <a href={project.codeUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Card Content */}
              <CardContent className="project-content-compact relative z-10 space-y-3">
                {/* Enhanced tags section */}
                <div className="project-tags-compact flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className={cn(
                        "project-tag-compact transition-all duration-300 hover:scale-105 text-xs",
                        filter === tag 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md" 
                          : "hover:bg-blue-200/80 dark:hover:bg-blue-900/50"
                      )}
                      style={{ animationDelay: `${index * 80 + tagIndex * 40}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Enhanced title with better typography */}
                <h3 className="project-title-compact font-serif text-lg md:text-xl font-bold leading-tight">
                  {project.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="project-description-compact text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              
              {/* Card Footer */}
              <CardFooter className="project-footer-compact relative z-10 flex flex-wrap gap-2">
                <Button 
                  asChild 
                  className="project-button-compact flex-1"
                  size="sm"
                >
                  <Link to={project.url} className="flex items-center justify-center gap-1.5">
                    <Rocket className="h-3.5 w-3.5" />
                    <span className="font-medium text-xs">View Details</span>
                  </Link>
                </Button>
                
                {project.demoUrl && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:scale-105 text-xs"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <Globe className="h-3.5 w-3.5 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
                
                {project.codeUrl && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 text-xs"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <Code className="h-3.5 w-3.5 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
