
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, Briefcase, Mail, Code, Sparkles, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MobileMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home, color: "text-blue-500", logoComponent: null },
    { name: "About", path: "/about", icon: User, color: "text-purple-500", logoComponent: null },
    { name: "Projects", path: "/projects", icon: Briefcase, color: "text-green-500", logoComponent: null },
    { 
      name: "Contact", 
      path: "/contact", 
      icon: MessageCircle, 
      color: "text-pink-500",
      logoComponent: null
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          className="md:hidden relative group p-2 rounded-lg button-glow hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/30 dark:hover:to-purple-950/30 transition-all duration-300" 
          size="icon"
        >
          <Menu className="h-5 w-5 relative z-10 group-hover:rotate-180 transition-transform duration-300" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-xl border-l border-border/40">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative mb-8">
          <div className="flex items-center gap-3 text-left">
            {/* Logo */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">
              Portfolio
            </span>
            <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
          </div>
        </div>
        
        <nav className="flex flex-col space-y-2 relative">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                "group relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 nav-item-enhanced",
                "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/30 dark:hover:to-purple-950/30",
                "hover:scale-105 hover:-translate-x-2 hover:shadow-sm",
                location.pathname === item.path 
                  ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 shadow-sm scale-105 -translate-x-2" 
                  : "text-foreground/70 hover:text-foreground"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              {item.icon && (
                <div className={cn(
                  "relative p-2 rounded-lg transition-all duration-300 z-10",
                  location.pathname === item.path 
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20" 
                    : "group-hover:bg-gradient-to-r group-hover:from-blue-500/10 group-hover:to-purple-500/10"
                )}>
                  <item.icon className={cn(
                    "h-4 w-4 transition-all duration-300",
                    location.pathname === item.path ? item.color : "group-hover:" + item.color
                  )} />
                </div>
              )}
              
              {/* Text */}
              <span className="relative flex-1">{item.name}</span>
              
              {/* Active indicator */}
              {location.pathname === item.path && (
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}
        </nav>
        
        {/* Footer in mobile menu */}
        <div className="absolute bottom-6 right-6 left-6">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">♥</span>
            <span>and React</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
