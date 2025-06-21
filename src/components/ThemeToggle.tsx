
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-full"
        disabled
      >
        <Monitor className="h-5 w-5 transition-all" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      className="rounded-full transition-all duration-300 hover:scale-110 button-glow"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 transition-all rotate-0 scale-100" />
      )}
    </Button>
  );
}
