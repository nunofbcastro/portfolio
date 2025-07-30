interface FooterProps {
  language: 'pt' | 'en';
}

export const Footer = ({ language }: FooterProps) => {
  const content = {
    pt: {
      rights: "Todos os direitos reservados",
      terms: "Termos",
      privacy: "Política de Privacidade",
      contact: "Contacto"
    },
    en: {
      rights: "All rights reserved",
      terms: "Terms",
      privacy: "Privacy Policy",
      contact: "Contact"
    }
  };

  const text = content[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} João Silva — {text.rights}
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {text.terms}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {text.privacy}
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
              {text.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};