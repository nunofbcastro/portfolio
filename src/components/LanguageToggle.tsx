import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { uiText, type Language } from "@/data/i18n";

interface LanguageToggleProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  const nextLanguage = language === "pt" ? "en" : "pt";
  const text = uiText[language];
  const label = nextLanguage === "en" ? text.languageToggle.switchToEnglish : text.languageToggle.switchToPortuguese;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={label}
      title={label}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span className="text-sm font-medium">{nextLanguage.toUpperCase()}</span>
    </Button>
  );
};
