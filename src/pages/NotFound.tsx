
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-in fade-in duration-500">
      <div className="mb-6 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-xl opacity-70"></div>
        <div className="relative bg-background p-6 rounded-full border shadow-lg">
          <AlertCircle className="h-16 w-16 text-primary" />
        </div>
      </div>
      
      <h1 className="font-serif text-7xl font-bold mb-2 text-primary">404</h1>
      <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
      
      <p className="text-muted-foreground mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" size="lg">
          <Link to="/">Back to Home</Link>
        </Button>
        
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
