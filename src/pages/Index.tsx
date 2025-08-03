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
      
      <main>
        {sections.hero && (
          <HeroSection language={language} />
        )}
        
        {sections.about && (
          <div className="py-20 bg-muted/30">
            <AboutSection language={language} />
          </div>
        )}
        
        {sections.experience && (
          <div className="py-20">
            <ExperienceSection language={language} />
          </div>
        )}
        
        {sections.education && (
          <div className="py-20 bg-muted/20">
            <EducationSection language={language} />
          </div>
        )}
        
        {sections.projects && (
          <div className="py-20">
            <ProjectsSection language={language} />
          </div>
        )}
        
        {sections.awards && (
          <div className="py-20 bg-muted/30">
            <AwardsSection language={language} />
          </div>
        )}
        
        {sections.testimonials && (
          <div className="py-20">
            <TestimonialsSection language={language} />
          </div>
        )}
        
        {sections.contact && (
          <div className="py-20 bg-muted/20">
            <ContactSection language={language} />
          </div>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
