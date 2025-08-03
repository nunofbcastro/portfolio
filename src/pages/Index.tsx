import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Timeline } from "@/components/Timeline";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
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
          <div className="bg-muted/30">
            <AboutSection language={language} />
          </div>
        )}
        
        {sections.timeline && (
          <div className="bg-muted/20">
            <Timeline
              title={portfolioData.timeline[language].title}
              items={portfolioData.timeline[language].items}
              renderItem={(item, index, isMobile) => {
                const Icon = item.icon === "Briefcase" ? Briefcase : GraduationCap;
                return (
                  <Card className="hover:shadow-xl hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            {item.type === "experience" ? (
                              <>
                                <h3 className="font-bold text-xl text-foreground mb-1">{item.role}</h3>
                                <p className="font-semibold text-primary text-lg">{item.company}</p>
                              </>
                            ) : (
                              <>
                                <h3 className="font-bold text-xl text-foreground mb-1">{item.degree}</h3>
                                <p className="font-semibold text-primary text-lg">{item.institution}</p>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3 md:items-end">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="font-medium">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="font-medium">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {item.description && (
                        Array.isArray(item.description) ? (
                          <ul className="space-y-2 mb-4">
                            {item.description.map((desc, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        )
                      )}

                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIdx) => (
                            <Badge key={techIdx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              }}
            />
          </div>
        )}
        
        {sections.projects && (
          <div>
            <ProjectsSection language={language} />
          </div>
        )}
        
        {sections.awards && (
          <div className="bg-muted/30">
            <AwardsSection language={language} />
          </div>
        )}
        
        {sections.testimonials && (
          <div>
            <TestimonialsSection language={language} />
          </div>
        )}
        
        {sections.contact && (
          <div className="bg-muted/20">
            <ContactSection language={language} />
          </div>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
