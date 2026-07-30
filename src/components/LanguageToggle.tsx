import { uiText, type Language } from "@/data/i18n";

interface LanguageToggleProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  const nextLanguage = language === "pt" ? "en" : "pt";
  const text = uiText[language];
  const label =
    nextLanguage === "en"
      ? text.languageToggle.switchToEnglish
      : text.languageToggle.switchToPortuguese;

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={`${nextLanguage.toUpperCase()} - ${label}`}
      title={label}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-border/70 px-3 font-mono-meta text-[10px] transition-colors hover:border-foreground/40"
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
};
