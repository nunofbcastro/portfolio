import Index from "./Index";
import { useState, useEffect } from "react";
import type { Language } from "@/data/i18n";

interface AppProps {
  currentYear: number;
  heroImageUrl: string;
}

const App = ({ currentYear, heroImageUrl }: AppProps) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "pt" || storedLanguage === "en") {
      setLanguage(storedLanguage);
      return;
    }

    const userLang = navigator.language.split("-")[0];
    if (userLang === "pt" || userLang === "en") {
      setLanguage(userLang);
      localStorage.setItem("language", userLang);
      return;
    }

    setLanguage("en");
    localStorage.setItem("language", "en");
  }, []);

  const handleSetLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  return <Index language={language} setLanguage={handleSetLanguage} currentYear={currentYear} heroImageUrl={heroImageUrl} />;
};

export default App;

