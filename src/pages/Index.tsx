import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, User } from "lucide-react";

const Index = () => {
  return (
    <div className="page-section active space-y-16 min-h-screen">
      <section className="flex flex-col items-center text-center space-y-6 py-16 md:py-24">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <User className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
          <span>Ankit Kumar</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] leading-relaxed">
          Web Developer & Designer
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-3xl w-full">
          <Button asChild variant="outline" className="h-32 flex flex-col items-center justify-center gap-2 p-6">
            <Link to="/about">
              <User className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">About Me</span>
              <span className="text-xs text-muted-foreground">Background & Skills</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-32 flex flex-col items-center justify-center gap-2 p-6">
            <Link to="/projects">
              <Code className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">Projects</span>
              <span className="text-xs text-muted-foreground">View My Work</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-32 flex flex-col items-center justify-center gap-2 p-6">
            <Link to="/contact">
              <Briefcase className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">Contact</span>
              <span className="text-xs text-muted-foreground">Get In Touch</span>
            </Link>
          </Button>
        </div>
        
        <Button asChild size="lg" className="rounded-full px-8 mt-8">
          <Link to="/">
            <span>Enter Portfolio</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;
