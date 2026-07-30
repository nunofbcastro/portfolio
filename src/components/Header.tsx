import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { uiText, type Language } from "@/data/i18n";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  language: Language;
  setLanguage?: (language: Language) => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const text = uiText[language];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const defaultSetLanguage = (nextLanguage: Language) => {
    localStorage.setItem("language", nextLanguage);
    const newPath = nextLanguage === "pt" ? "/portfolio/pt/" : "/portfolio/";
    window.location.href = newPath;
  };

  const onSetLanguage = setLanguage || defaultSetLanguage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full no-print transition-all duration-300 ${
        scrolled || open ? "glass border-b border-border/70" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-2.5 md:py-3">
        <a
          href="#main-content"
          className="shrink-0 font-mono-meta text-[11px] font-semibold tracking-[0.12em] text-foreground focus-visible:rounded-sm sm:text-xs md:text-sm"
        >
          {text.header.brand}
        </a>

        <nav
          aria-label={text.accessibility.primaryNavigation}
          className="hidden items-center gap-8 md:flex"
        >
          {text.header.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono-meta text-[11px] text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <LanguageToggle language={language} setLanguage={onSetLanguage} />
          <ThemeToggle language={language} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={text.accessibility.primaryNavigation}
          className="border-t border-border/60 bg-background/95 px-4 py-5 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {text.header.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-3.5 font-mono-meta text-xs text-foreground transition-colors hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
