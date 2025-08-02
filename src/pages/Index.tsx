import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const { sections } = portfolioData;

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        {sections.hero && <HeroSection language={language} />}
        {sections.about && <AboutSection language={language} />}
        {sections.experience && <ExperienceSection language={language} />}
        {sections.education && <EducationSection language={language} />}
        {sections.projects && <ProjectsSection language={language} />}
        {sections.awards && <AwardsSection language={language} />}
        {sections.testimonials && <TestimonialsSection language={language} />}
        {sections.contact && <ContactSection language={language} />}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
