import { uiText, type Language } from "@/data/i18n";

interface FooterProps {
  language: Language;
  currentYear: number;
}

export const Footer = ({ language, currentYear }: FooterProps) => {
  const text = uiText[language];
  const footer = text.footer;

  return (
    <footer className="border-t border-border/70 py-14 no-print">
      <div className="container mx-auto px-4">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">{footer.explore}</p>
            <div className="flex flex-col gap-2">
              {text.header.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">{footer.connect}</p>
            <div className="flex flex-col gap-2">
              <a
                href="#contacto"
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {footer.contact}
              </a>
              <a
                href="mailto:nunofbcastro@gmail.com"
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                nunofbcastro@gmail.com
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono-meta text-xs tracking-[0.14em] text-foreground">
              {text.header.brand}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              © {currentYear} Nuno Castro — {footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
