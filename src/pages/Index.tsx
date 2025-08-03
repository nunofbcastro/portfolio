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

interface IndexProps {
  language: 'pt' | 'en';
  setLanguage: (language: 'pt' | 'en') => void;
}

const Index = ({ language, setLanguage }: IndexProps) => {
  const { sections } = portfolioData;

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="relative">
        {sections.hero && (
          <div className="relative">
            <HeroSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/80" />
          </div>
        )}
        
        {sections.about && (
          <div className="relative -mt-16 pt-16">
            <AboutSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-muted/30" />
          </div>
        )}
        
        {sections.experience && (
          <div className="relative">
            <ExperienceSection language={language} />
          </div>
        )}
        
        {sections.education && (
          <div className="relative">
            <EducationSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background/50" />
          </div>
        )}
        
        {sections.projects && (
          <div className="relative -mt-10 pt-10">
            <ProjectsSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-muted/20" />
          </div>
        )}
        
        {sections.awards && (
          <div className="relative -mt-10 pt-10">
            <AwardsSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background/30" />
          </div>
        )}
        
        {sections.testimonials && (
          <div className="relative -mt-10 pt-10">
            <TestimonialsSection language={language} />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-muted/40" />
          </div>
        )}
        
        {sections.contact && (
          <div className="relative -mt-10 pt-10">
            <ContactSection language={language} />
          </div>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
