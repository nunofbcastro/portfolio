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
import { Separator } from "@/components/ui/separator";
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
        {sections.hero && <HeroSection language={language} />}
        
        {sections.about && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <AboutSection language={language} />
          </>
        )}
        
        {sections.experience && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ExperienceSection language={language} />
          </>
        )}
        
        {sections.education && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <EducationSection language={language} />
          </>
        )}
        
        {sections.projects && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ProjectsSection language={language} />
          </>
        )}
        
        {sections.awards && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <AwardsSection language={language} />
          </>
        )}
        
        {sections.testimonials && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <TestimonialsSection language={language} />
          </>
        )}
        
        {sections.contact && (
          <>
            <Separator className="my-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ContactSection language={language} />
          </>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
