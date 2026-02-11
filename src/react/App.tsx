import Index from "./Index";
import { useState, useEffect } from "react";

interface AppProps {
  currentYear: number;
}

const App = ({ currentYear }: AppProps) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

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

  const handleSetLanguage = (nextLanguage: "pt" | "en") => {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  return <Index language={language} setLanguage={handleSetLanguage} currentYear={currentYear} />;
};

export default App;

