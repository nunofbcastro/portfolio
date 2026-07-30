import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { uiText, type Language } from "@/data/i18n";

interface ThemeToggleProps {
  language: Language;
}

export const ThemeToggle = ({ language }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const text = uiText[language].themeToggle;
  const isDarkTheme = theme === "dark";
  const label = isDarkTheme ? text.switchToLight : text.switchToDark;

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setTheme(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDarkTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-11 min-w-11 items-center justify-center gap-1 rounded-full border border-border/70 px-2.5 font-mono-meta text-[10px] transition-colors hover:border-foreground/40 sm:px-3.5"
    >
      <span className="sm:hidden" aria-hidden="true">
        {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
      <span className="hidden items-center gap-1 sm:inline-flex">
        <span className={theme === "light" ? "text-foreground" : "text-muted-foreground"}>
          {text.day}
        </span>
        <span className="text-muted-foreground">/</span>
        <span className={theme === "dark" ? "text-foreground" : "text-muted-foreground"}>
          {text.night}
        </span>
      </span>
    </button>
  );
};
