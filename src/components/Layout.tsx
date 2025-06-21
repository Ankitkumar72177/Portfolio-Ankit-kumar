import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { useEffect, useState } from "react";
import { Code, Sparkles, Github, Twitter, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: "🏠", logoComponent: null },
    { name: "About", path: "/about", icon: "👤", logoComponent: null },
    { name: "Projects", path: "/projects", icon: "💼", logoComponent: null },
    // Blog link hidden as requested
    { 
      name: "Contact", 
      path: "/contact", 
      icon: null,
      logoComponent: () => (
        <div className="relative flex items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-sm">
              <MessageCircle className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="flex min-h-screen flex-col antialiased transition-colors duration-300">
      {/* Enhanced Navigation Header */}
      <header className={cn(
        "sticky top-0 z-50 border-b border-border/30 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30 transition-all duration-300",
        isScrolled 
          ? "bg-background/50 shadow-lg shadow-black/5 border-border/40" 
          : "bg-background/20 border-border/20"
      )}>
        {/* Dynamic gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3 pointer-events-none transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-30"
        )}></div>
        
        <div className="container relative">
          <div className="flex h-16 items-center justify-between">
            {/* Enhanced Logo Section */}
            <div className="flex items-center gap-8">
              <Link 
                to="/" 
                className="group flex items-center gap-3 font-serif text-xl font-bold transition-all duration-300 hover:scale-105"
              >
                {/* Logo Icon with Animation */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                {/* Logo Text with Gradient */}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-pink-700 transition-all duration-300">
                  Portfolio
                </span>
                
                {/* Sparkle Effect on Hover */}
                <Sparkles className="h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
              </Link>

              {/* Enhanced Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item, index) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group nav-item-enhanced",
                      "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                      "hover:scale-105 hover:shadow-sm",
                      location.pathname === item.path 
                        ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 shadow-sm" 
                        : "text-muted-foreground"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Content */}
                    <span className="relative flex items-center gap-2 z-10">
                      {/* Custom Logo Component for Contact - positioned before text */}
                      {item.logoComponent && (
                        <item.logoComponent />
                      )}
                      
                      {item.icon && (
                        <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                      )}
                      {item.name}
                    </span>
                    
                    {/* Active Indicator */}
                    {location.pathname === item.path && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    )}
                    
                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-8 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Enhanced Right Section */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle with Enhanced Styling */}
              <ThemeToggle />
              
              {/* Enhanced Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-10 transition-all duration-300">
        {isMounted && <Outlet />}
      </main>
      
      {/* Enhanced Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium ml-1">
                Ankit Kumar
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Built with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>and React</span>
            </div>
          </div>
          
          {/* Mobile Contact Information */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground md:hidden">
            <a 
              href="mailto:ankit_kumar.ag22@nsut.ac.in"
              className="group flex items-center gap-1.5 hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Email</span>
            </a>
            <a 
              href="tel:+917217734805"
              className="group flex items-center gap-1.5 hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Phone</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Contact Information */}
            <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground border-r border-border/40 pr-4">
              <a 
                href="mailto:ankit_kumar.ag22@nsut.ac.in"
                className="group flex items-center gap-1.5 hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden lg:inline">ankit_kumar.ag22@nsut.ac.in</span>
                <span className="lg:hidden">Email</span>
              </a>
              <a 
                href="tel:+917217734805"
                className="group flex items-center gap-1.5 hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden lg:inline">+91 7217734805</span>
                <span className="lg:hidden">Phone</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a 
                href="https://github.com/Ankitkumar72177" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Twitter className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
