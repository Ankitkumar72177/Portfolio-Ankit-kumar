import React, { useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Link } from "react-router-dom";
import { Rocket, ArrowRight, Globe, Code, ExternalLink, Github, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
  variant?: "home" | "projects";
}

export const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ 
  project, 
  index, 
  variant = "home" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close expanded view when clicking outside
  useOutsideClick(cardRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
    if (showQuickActions) {
      setShowQuickActions(false);
    }
  });

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setShowQuickActions(false); // Close quick actions when expanding
  };

  const toggleQuickActions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickActions(!showQuickActions);
    setIsExpanded(false); // Close expanded view when showing quick actions
  };

  return (
    <BackgroundGradient
      className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900"
      containerClassName="group max-w-sm mx-auto"
    >
      <div ref={cardRef} className="relative">
        <Card 
          className={cn(
            "text-card-foreground bg-transparent border-0 shadow-none transition-all duration-500 cursor-pointer",
            variant === "projects" ? "project-card-compact" : "project-card-enhanced",
            isExpanded && "transform scale-[1.02]"
          )}
          style={{ 
            animationDelay: `${300 + index * 200}ms`,
            opacity: 0,
            transform: "translateY(12px)"
          }}
          onClick={toggleExpanded}
        >
          {/* Project Image */}
          <div className="relative rounded-t-[18px] overflow-hidden mb-4">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </AspectRatio>
            
            {/* Enhanced overlay with gradient and effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Button
                  size="sm"
                  variant="secondary"
                  className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg hover:scale-110 transition-transform duration-200"
                  onClick={toggleQuickActions}
                >
                  <Info className="w-4 h-4 mr-2" />
                  Quick Actions
                </Button>
              </div>
            </div>

            {/* Quick Actions Panel */}
            {showQuickActions && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-0 duration-300">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm font-medium">Quick Actions</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowQuickActions(false);
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <Button asChild variant="secondary" size="sm" className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button asChild variant="secondary" size="sm" className="flex-1">
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Link to={project.url} className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                      <ArrowRight className="h-3 w-3 mr-1" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <CardContent className="px-0 py-0 relative z-10 space-y-4">
            {/* Enhanced tags section */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge 
                  key={tag} 
                  className="text-xs"
                  style={{ animationDelay: `${700 + index * 150 + tagIndex * 50}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Enhanced title with better typography */}
            <h3 className="font-serif text-lg md:text-xl font-bold leading-tight text-black dark:text-neutral-200 mb-2">
              {project.title}
            </h3>
            
            {/* Enhanced description */}
            <p className={cn(
              "text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed transition-all duration-300",
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            )}>
              {project.description}
            </p>

            {/* Expanded content */}
            {isExpanded && (
              <div className="animate-in slide-in-from-top-2 duration-300 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-neutral-200 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {(project.demoUrl || project.codeUrl) && (
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-neutral-200 mb-2">Links:</h4>
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Globe className="h-3 w-3 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.codeUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.codeUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Code className="h-3 w-3 mr-1" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="px-0 pt-4 pb-0 relative z-10">
            <Button 
              asChild 
              className="w-full rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <Link to={project.url} className="flex items-center justify-center gap-2" onClick={(e) => e.stopPropagation()}>
                <span>View Project</span>
                <span className="bg-blue-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </BackgroundGradient>
  );
};
