import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/theme-context";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

// Define the sections for the scrollable page
const sections = [
  { id: "home", component: Home, path: "/" },
  { id: "about", component: About, path: "/about" },
  { id: "projects", component: Projects, path: "/projects" },
  { id: "contact", component: Contact, path: "/contact" },
];

// Create a custom event to communicate with Layout
const dispatchSectionChangeEvent = (sectionId: string) => {
  const event = new CustomEvent('section-change', { 
    detail: { sectionId } 
  });
  window.dispatchEvent(event);
};

const ScrollablePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isInertiaScrollActive, setIsInertiaScrollActive] = useState(false);
  
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollAnimationRef = useRef<number | null>(null);
  const scrollTargetY = useRef<number | null>(null);
  const scrollVelocity = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const lastScrollTime = useRef(Date.now());
  
  // Register refs for each section
  const registerSectionRef = (id: string, ref: HTMLDivElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  
  // Update viewport height on resize
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);
  
  // Apple-style inertia scroll animation
  const animateInertiaScroll = () => {
    if (scrollTargetY.current === null) return;
    
    const currentY = window.scrollY;
    const targetY = scrollTargetY.current;
    
    // Calculate distance to target
    const distance = targetY - currentY;
    
    // If we're very close to the target, just jump to it
    if (Math.abs(distance) < 0.5) {
      window.scrollTo({ top: targetY });
      scrollTargetY.current = null;
      scrollVelocity.current = 0;
      setIsInertiaScrollActive(false);
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
      }
      return;
    }
    
    // Calculate step with easing
    const easing = 0.085; // Higher = faster
    const step = distance * easing;
    
    // Update velocity for inertia
    scrollVelocity.current = scrollVelocity.current * 0.95 + step * 0.05;
    
    // Apply step
    window.scrollTo({ top: currentY + scrollVelocity.current });
    
    // Continue animation
    scrollAnimationRef.current = requestAnimationFrame(animateInertiaScroll);
  };
  
  // Determine which section to scroll to based on scroll direction
  const getTargetSection = () => {
    if (!activeSection) return null;
    
    const currentIndex = sections.findIndex(section => section.id === activeSection);
    if (currentIndex === -1) return null;
    
    let targetIndex = currentIndex;
    
    if (scrollDirection === 'down' && currentIndex < sections.length - 1) {
      targetIndex = currentIndex + 1;
    } else if (scrollDirection === 'up' && currentIndex > 0) {
      targetIndex = currentIndex - 1;
    }
    
    return sections[targetIndex];
  };
  
  // Scroll to a specific section with inertia animation
  const scrollToSection = (sectionId: string, immediate = false) => {
    const section = sectionRefs.current[sectionId];
    if (!section) return;
    
    const targetY = section.offsetTop;
    
    if (immediate) {
      window.scrollTo({ top: targetY });
      return;
    }
    
    // Set target for animation
    scrollTargetY.current = targetY;
    
    // Start with some initial velocity in the direction of travel
    const currentY = window.scrollY;
    const distance = targetY - currentY;
    const initialVelocity = Math.sign(distance) * Math.min(Math.abs(distance) * 0.05, 20);
    scrollVelocity.current = initialVelocity;
    
    // Start animation if not already running
    if (!scrollAnimationRef.current) {
      setIsInertiaScrollActive(true);
      scrollAnimationRef.current = requestAnimationFrame(animateInertiaScroll);
    }
  };
  
  // Handle scroll to determine which section is in view and update parallax effects
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const lastScrollPosition = window.scrollY;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newDirection = scrollPosition > lastScrollY.current ? 'down' : 'up';
      
      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection);
      }
      
      // Update scroll progress percentage (0-100)
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Update scroll state
      setScrollY(scrollPosition);
      lastScrollY.current = scrollPosition;
      lastScrollTime.current = Date.now();
      
      // Set scrolling state with debounce
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      // Calculate which section is in view (with offset for header)
      const viewportMid = scrollPosition + window.innerHeight / 2;
      
      // Find the section that is currently in view
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop - 100 && 
            scrollPosition < offsetTop + offsetHeight - 100) {
          if (activeSection !== section.id) {
            setActiveSection(section.id);
            // Dispatch event to update sidebar
            dispatchSectionChangeEvent(section.id);
            // Update browser history without scrolling to preserve scroll position
            const newPath = section.path;
            if (location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, location.pathname, scrollDirection]);
  
  // Handle direct navigation to a section via URL
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingSection = sections.find(section => section.path === currentPath);
    
    if (matchingSection) {
      setActiveSection(matchingSection.id);
      // Dispatch event to update sidebar
      dispatchSectionChangeEvent(matchingSection.id);
      // Scroll to the section smoothly after a short delay
      setTimeout(() => {
        scrollToSection(matchingSection.id, true);
      }, 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Handle theme transitions
  useEffect(() => {
    setIsThemeTransitioning(true);
    document.documentElement.classList.add('theme-transitioning');
    
    const timer = setTimeout(() => {
      setIsThemeTransitioning(false);
      document.documentElement.classList.remove('theme-transitioning');
    }, 350); // Slightly longer than the transition duration
    
    return () => clearTimeout(timer);
  }, [theme]);
  
  // Apple-style smooth scroll with inertia
  useEffect(() => {
    const isWheelScrolling = false;
    let wheelTimeout: NodeJS.Timeout;
    let lastWheelTime = 0;
    let consecutiveWheels = 0;
    
    // Enhanced wheel event handler with Apple-style inertia
    const handleWheel = (e: WheelEvent) => {
      // Allow default scrolling behavior, don't prevent default
      
      const now = Date.now();
      const timeDelta = now - lastWheelTime;
      lastWheelTime = now;
      
      // Count consecutive wheel events to detect fast scrolling
      if (timeDelta < 100) {
        consecutiveWheels++;
      } else {
        consecutiveWheels = 0;
      }
      
      // Determine scroll direction based on wheel delta
      const newDirection = e.deltaY > 0 ? 'down' : 'up';
      setScrollDirection(newDirection);
      
      // If we detect rapid scrolling, transition to next section
      if (consecutiveWheels > 3 && !isInertiaScrollActive) {
        const targetSection = getTargetSection();
        if (targetSection) {
          scrollToSection(targetSection.id);
        }
      }
    };
    
    // Handle touch events for mobile Apple-style scrolling
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      
      // Cancel any existing scroll animation
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
      }
      
      scrollTargetY.current = null;
      setIsInertiaScrollActive(false);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Let browser handle normal touch scrolling
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      
      const touchDuration = touchEndTime - touchStartTime.current;
      const touchDistance = touchStartY.current - touchEndY;
      
      // Calculate velocity (pixels per ms)
      const velocity = touchDistance / touchDuration;
      
      // Detect flick gesture for section navigation
      if (Math.abs(velocity) > 0.5 && touchDuration < 300) {
        const newDirection = velocity > 0 ? 'down' : 'up';
        setScrollDirection(newDirection);
        
        // Find target section based on direction
        const targetSection = getTargetSection();
        if (targetSection) {
          scrollToSection(targetSection.id);
        }
      } else if (Math.abs(velocity) > 0.2) {
        // Add inertia for medium-speed gestures
        const currentY = window.scrollY;
        const inertiaDistance = velocity * 500; // Inertia factor
        
        scrollTargetY.current = currentY + inertiaDistance;
        scrollVelocity.current = velocity * 20;
        setIsInertiaScrollActive(true);
        
        if (!scrollAnimationRef.current) {
          scrollAnimationRef.current = requestAnimationFrame(animateInertiaScroll);
        }
      }
    };
    
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if we're in an input field
      if (e.target instanceof HTMLInputElement || 
          e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setScrollDirection('down');
        const targetSection = getTargetSection();
        if (targetSection) {
          scrollToSection(targetSection.id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setScrollDirection('up');
        const targetSection = getTargetSection();
        if (targetSection) {
          scrollToSection(targetSection.id);
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(wheelTimeout);
      
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, isInertiaScrollActive]);

  return (
    <div 
      ref={containerRef}
      className="scrollable-page-container overflow-visible relative w-full h-full"
    >
      {/* Theme transition overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isThemeTransitioning ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)'
            : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)'
        }}
      />
      
      {/* Progress indicator (Apple-style subtle dot indicator) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none dot-indicator">
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-blue-600 scale-110' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            style={{
              opacity: activeSection === section.id ? 1 : 0.6,
            }}
          />
        ))}
      </div>
      
      {sections.map(({ id, component: SectionComponent }, index) => {
        // Calculate parallax and 3D transform effects
        const sectionProgress = index / (sections.length - 1);
        const scrollOffset = scrollY - (index * viewportHeight);
        const normalizedScrollY = scrollY / ((sections.length - 1) * viewportHeight);
        
        // Parallax factors - toned down for better scrollability
        const parallaxY = scrollY * 0.05; // Reduced parallax speed
        const sectionParallax = scrollOffset * 0.1; // Reduced section-specific parallax
        const rotateX = isScrolling ? (scrollDirection === 'down' ? -1 : 1) : 0; // Reduced 3D rotation
        const translateZ = isScrolling ? -15 : 0; // Reduced depth effect
        
        // Calculate scale based on section visibility
        const visibilityThreshold = 100; // px
        const element = sectionRefs.current[id];
        const rect = element?.getBoundingClientRect();
        const isVisible = rect ? 
          rect.top < window.innerHeight + visibilityThreshold && 
          rect.bottom > -visibilityThreshold : 
          false;
        
        // Opacity and scale effects - less dramatic
        const distanceFromActive = Math.abs(
          sections.findIndex(s => s.id === id) - 
          sections.findIndex(s => s.id === activeSection)
        );
        
        const opacity = Math.max(0.7, 1 - (distanceFromActive * 0.1)); // Higher minimum opacity
        const scale = isVisible ? 
          Math.max(0.98, 1 - (Math.abs(sectionParallax) * 0.0001)) : // Less scale effect
          0.98;
        
        // Color shift based on scroll progress (even more subtle)
        const hueRotation = normalizedScrollY * 2; // Very minimal hue rotation
        
        return (
          <div
            key={id}
            id={id}
            ref={(ref) => registerSectionRef(id, ref)}
            className="section min-h-screen scroll-mt-16 overflow-visible relative apple-section"
            data-active={activeSection === id ? "true" : "false"}
            data-section-id={id}
            style={{
              opacity,
              transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Parallax background layer - more subtle */}
            <div 
              className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-transparent"
              style={{
                transform: `translateY(${sectionParallax * 0.1}px)`, // Reduced parallax effect
                opacity: 0.3, // Lower opacity
                filter: `hue-rotate(${hueRotation}deg)`,
                background: theme === 'dark' 
                  ? `radial-gradient(circle at ${50 + normalizedScrollY * 5}% ${50 - normalizedScrollY * 5}%, rgba(30, 41, 59, 0.1), transparent 70%)`
                  : `radial-gradient(circle at ${50 + normalizedScrollY * 5}% ${50 - normalizedScrollY * 5}%, rgba(219, 234, 254, 0.2), transparent 70%)`,
              }}
            />

            {/* Content with minimal 3D transform */}
            <div 
              className="h-full w-full"
              style={{
                transform: `
                  scale(${scale})
                `,
                transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <SectionComponent />
            </div>
            
            {/* Apple-style subtle gradient overlay */}
            <div 
              className="absolute inset-0 pointer-events-none bg-gradient-to-b transition-opacity duration-500"
              style={{
                opacity: isScrolling ? 0.08 : 0, // Reduced opacity
                background: theme === 'dark' 
                  ? 'linear-gradient(to bottom, rgba(30, 41, 59, 0.1), transparent)'
                  : 'linear-gradient(to bottom, rgba(219, 234, 254, 0.1), transparent)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ScrollablePage;
