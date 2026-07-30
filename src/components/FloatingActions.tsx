import { FileText, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { uiText, type Language } from "@/data/i18n";

interface FloatingActionsProps {
  language: Language;
}

export const FloatingActions = ({ language }: FloatingActionsProps) => {
  const text = uiText[language];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const wideEnough = window.matchMedia("(min-width: 768px)").matches;
      setVisible(pastHero && wideEnough);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-2 print:hidden no-print md:flex">
      <a
        href="#contacto"
        data-cursor={text.hero.contact}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground px-4 font-mono-meta text-[11px] font-semibold text-background transition-transform duration-300 hover:scale-[1.03] active:scale-95"
      >
        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
        {text.hero.contact}
      </a>
      <button
        id="download-cv-button-fab"
        type="button"
        data-cursor={text.hero.downloadCV}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-4 font-mono-meta text-[11px] font-semibold text-foreground backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] active:scale-95"
      >
        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
        {text.hero.downloadCV}
      </button>
    </div>
  );
};
