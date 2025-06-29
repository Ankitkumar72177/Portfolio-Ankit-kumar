import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { Code, Sparkles, Github, Linkedin, Mail, MessageCircle, Phone, Home, User, Briefcase } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Layout() {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Check for hash in URL on mount and set active section
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    } else {
      // Set initial active section based on path
      const path = location.pathname;
      if (path === "/") setActiveSection("home");
      else if (path === "/about") setActiveSection("about");
      else if (path === "/projects") setActiveSection("projects");
      else if (path === "/contact") setActiveSection("contact");
      else setActiveSection("");
    }
    
    // Add scroll event listener to track active section and header shadow
    const handleScroll = () => {
      // Check if scrolled for header shadow
      setIsScrolled(window.scrollY > 10);
      
      const scrollPosition = window.scrollY + 64; // Offset for header
      
      // Check which section is in view
      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    // Listen for section change events from ScrollablePage
    const handleSectionChange = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      setActiveSection(sectionId);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('section-change', handleSectionChange as EventListener);
    
    // Call once on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('section-change', handleSectionChange as EventListener);
    };
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", icon: Home, id: "home" },
    { name: "About", path: "/about", icon: User, id: "about" },
    { name: "Projects", path: "/projects", icon: Briefcase, id: "projects" },
    { name: "Contact", path: "/contact", icon: MessageCircle, id: "contact" },
  ];
  
  // Function to handle clicking on a navigation item
  const handleNavClick = (path: string, id: string) => {
    // First set the active section
    setActiveSection(id);
    
    // Determine if we're already on a scrollable page route
    const scrollableRoutes = ["", "/", "/about", "/projects", "/contact"];
    const isOnScrollablePage = scrollableRoutes.includes(location.pathname);
    
    if (isOnScrollablePage) {
      // We're on a scrollable page, so just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        // Use scrollIntoView with options for smooth scrolling and alignment
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start"  // Align the top of the element with the top of the viewport
        });
        
        // Update URL without reload
        window.history.replaceState(null, '', path);
      }
    } else {
      // We're not on a scrollable page, navigate to the path
      // The section ID will be in the path, and ScrollablePage will handle scrolling
      window.location.href = path;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full antialiased transition-all duration-500 ease-out">
        <Sidebar className="h-screen border-r border-border/30 bg-sidebar transition-all duration-400">
          <SidebarHeader className={cn(
            "border-b border-border/30 !p-0 sticky top-0 z-20 nav-sticky bg-sidebar",
            isScrolled && "nav-scrolled"
          )}>
            <div className="flex items-center justify-center gap-3 px-4 h-16">
              {/* Enhanced Logo Section */}
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
            </div>
          </SidebarHeader>

          <SidebarContent className="overflow-y-auto bg-sidebar">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={activeSection === item.id}
                        className={cn(
                          "relative group transition-all duration-300 sidebar-menu-button",
                          activeSection === item.id 
                            ? "bg-gradient-to-r from-blue-100/70 to-purple-100/70 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 shadow-sm font-medium" 
                            : "hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50"
                        )}
                        data-active={activeSection === item.id ? "true" : "false"}
                      >
                        <Link 
                          to={item.path} 
                          className="flex items-center gap-2 w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.path, item.id);
                          }}
                        >
                          <item.icon className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            activeSection === item.id && "text-blue-600 dark:text-blue-400 scale-110"
                          )} />
                          <span>{item.name}</span>
                          
                          {/* Active Indicator */}
                          {activeSection === item.id && (
                            <div className="absolute right-2 w-1 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-sidebar-border bg-sidebar">
            <div className="flex flex-col gap-4 p-2">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              
              {/* Phone Contact */}
              <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <a 
                  href="tel:+917217734805"
                  className="group flex items-center gap-2 hover:text-foreground transition-all duration-300 hover:scale-105 p-1 rounded"
                >
                  <Phone className="h-3 w-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>+91 7217734805</span>
                </a>
              </div>
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          {/* Top Header with Sidebar Trigger */}
          <header className={cn(
            "flex h-16 shrink-0 items-center gap-2 border-b border-border/30 px-4 nav-sticky bg-background/95",
            isScrolled && "nav-scrolled"
          )}>
            <SidebarTrigger className="" />
            
            {/* Social Links in Header */}
            <div className="flex items-center gap-3 ml-auto mr-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="mailto:ankit_kumar.ag22@nsut.ac.in"
                      className="group flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 header-social-link"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-xs">ankit_kumar.ag22@nsut.ac.in</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://github.com/Ankitkumar7217734" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 header-social-link"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-xs">GitHub</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 header-social-link"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-xs">LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div>
              <span className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium ml-1">
                  Ankit Kumar
                </span>
              </span>
            </div>
          </header>

          <main className="flex-1 overflow-auto bg-background scroll-smooth pt-0 h-screen">
            <div className="min-h-full">
              {isMounted && <Outlet />}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
