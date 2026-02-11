import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { uiText, type Language } from "@/data/i18n";

interface ThemeToggleProps {
  language: Language;
}

export const ThemeToggle = ({ language }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const text = uiText[language].themeToggle;
  const isDarkTheme = theme === "dark";
  const label = isDarkTheme ? text.switchToLight : text.switchToDark;

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setTheme(isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      aria-pressed={isDarkTheme}
      aria-label={label}
      title={label}
      className="flex items-center gap-2"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="text-sm font-medium">
        {theme === "light" ? text.dark : text.light}
      </span>
    </Button>
  );
};
