import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  language: 'pt' | 'en';
  setLanguage: (language: 'pt' | 'en') => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const navigation = [
    { id: 'sobre', pt: 'Sobre', en: 'About' },
    { id: 'experiencia', pt: 'Experiência', en: 'Experience' },
    { id: 'projetos', pt: 'Projetos', en: 'Projects' },
    { id: 'contacto', pt: 'Contacto', en: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xs border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">
          {language === 'pt' ? 'Portfólio' : 'Portfolio'}
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {language === 'pt' ? item.pt : item.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};