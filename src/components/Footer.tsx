import { uiText, type Language } from "@/data/i18n";

interface FooterProps {
  language: Language;
  currentYear: number;
}

export const Footer = ({ language, currentYear }: FooterProps) => {
  const text = uiText[language].footer;
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nuno Castro — {text.rights}
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
              {text.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
