import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: 'pt' | 'en';
  setLanguage: (language: 'pt' | 'en') => void;
}

export const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </Button>
  );
};