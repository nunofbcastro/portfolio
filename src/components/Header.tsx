import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { uiText, type Language } from "@/data/i18n";

interface HeaderProps {
  language: Language;
  setLanguage?: (language: Language) => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const text = uiText[language];

  const defaultSetLanguage = (nextLanguage: Language) => {
    localStorage.setItem("language", nextLanguage);
    const newPath = nextLanguage === "pt" ? "/portfolio/pt/" : "/portfolio/";
    window.location.href = newPath;
  };

  const onSetLanguage = setLanguage || defaultSetLanguage;

  return (
    <header className="fixed top-0 w-full glass border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#main-content" className="font-bold text-2xl tracking-tighter text-gradient focus-visible:rounded-sm">
          {text.header.brand}
        </a>

        <nav
          aria-label={text.accessibility.primaryNavigation}
          className="hidden md:flex items-center space-x-8"
        >
          {text.header.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group focus-visible:rounded-sm"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={onSetLanguage} />
          <ThemeToggle language={language} />
        </div>
      </div>
    </header>
  );
};
