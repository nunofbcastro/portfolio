import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { CVPrintView } from "@/components/CVPrintView";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface IndexProps {
  language: Language;
  setLanguage: (language: Language) => void;
  currentYear: number;
  heroImageUrl: string;
}

const Index = ({ language, setLanguage, currentYear, heroImageUrl }: IndexProps) => {
  const { sections } = portfolioData;
  const text = uiText[language];

  return (
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
        >
          {text.accessibility.skipToMainContent}
        </a>
        <Header language={language} setLanguage={setLanguage} />

        <main id="main-content">
          {sections.hero && (
            <HeroSection language={language} heroImageUrl={heroImageUrl} />
          )}

          {sections.about && (
            <>
              <AboutSection language={language} />
              <SectionDivider />
            </>
          )}

          {sections.timeline && (
            <>
              <JourneySection language={language} />
              <SectionDivider />
            </>
          )}

          {sections.projects && (
            <>
              <ProjectsSection language={language} />
            </>
          )}

          {sections.awards && (
            <>
              <AwardsSection language={language} />
            </>
          )}

          {sections.testimonials && (
            <>
              <TestimonialsSection language={language} />
            </>
          )}

          {sections.contact && (
            <ContactSection language={language} />
          )}
        </main>

        <Footer language={language} currentYear={currentYear} />
      </div>
      <CVPrintView language={language} />
    </div>
  );
};

export default Index;
