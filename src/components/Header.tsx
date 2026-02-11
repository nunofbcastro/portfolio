import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { uiText, type Language } from "@/data/i18n";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const text = uiText[language];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xs border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#main-content" className="font-bold text-xl focus-visible:rounded-sm">
          {text.header.brand}
        </a>
        
        <nav
          aria-label={text.accessibility.primaryNavigation}
          className="hidden md:flex items-center space-x-6"
        >
          {text.header.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-foreground hover:text-primary transition-colors focus-visible:rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <ThemeToggle language={language} />
        </div>
      </div>
    </header>
  );
};
