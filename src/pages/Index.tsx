import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ExperienceSection language={language} />
        <EducationSection language={language} />
        <ProjectsSection language={language} />
        <TestimonialsSection language={language} />
        <ContactSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
