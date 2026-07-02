import Index from "./Index";
import { useState, useEffect } from "react";
import type { Language } from "@/data/i18n";

interface AppProps {
  currentYear: number;
  heroImageUrl: string;
  initialLanguage: Language;
}

const App = ({ currentYear, heroImageUrl, initialLanguage }: AppProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Retrieve stored language or fallback to browser language
    let preferredLanguage: Language = initialLanguage;
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "pt" || storedLanguage === "en") {
      preferredLanguage = storedLanguage;
    } else {
      const userLang = navigator.language.split("-")[0];
      if (userLang === "pt" || userLang === "en") {
        preferredLanguage = userLang;
        localStorage.setItem("language", userLang);
      }
    }

    // Redirect to the correct localized route if preferredLanguage doesn't match the URL language
    if (preferredLanguage !== initialLanguage) {
      const newPath = preferredLanguage === "pt" ? "/portfolio/pt/" : "/portfolio/";
      window.location.replace(newPath);
    }
  }, [initialLanguage]);

  const handleSetLanguage = (nextLanguage: Language) => {
    localStorage.setItem("language", nextLanguage);
    const newPath = nextLanguage === "pt" ? "/portfolio/pt/" : "/portfolio/";
    window.location.href = newPath;
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  return <Index language={language} setLanguage={handleSetLanguage} currentYear={currentYear} heroImageUrl={heroImageUrl} />;
};

export default App;
