import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

interface ProjectsSectionProps {
  language: 'pt' | 'en';
}

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const [width] = useWindowSize();
  
  const text = portfolioData.projects[language];
  
  // Determine how many projects to show in first row based on screen size
  const getFirstRowCount = () => {
    if (width >= 1024) return 3; // lg: 3 columns
    if (width >= 768) return 2;  // md: 2 columns
    return 1; // mobile: 1 column
  };
  
  const firstRowCount = getFirstRowCount();
  const hasMoreProjects = text.projects.length > firstRowCount;

  return (
    <section id="projetos" className="py-20 md:py-32 bg-linear-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {text.title}
            </h2>
          </div>

          <div ref={projectsRef} className="relative">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {text.projects.map((project, index) => {
                const delay = 200 + (index * 200);
                const isInFirstRow = index < firstRowCount;
                const shouldShow = showAll || isInFirstRow;
                
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 mb-8 inline-block w-full ${
                      !shouldShow ? 'opacity-50 scale-95' : ''
                    }`}
                    style={{ 
                      transitionDelay: projectsVisible ? `${delay}ms` : '0ms',
                      opacity: projectsVisible ? (shouldShow ? 1 : 0.3) : 0,
                      transform: projectsVisible ? 
                        (shouldShow ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)') : 
                        'translateY(50px) scale(0.9)'
                    }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {text.viewProject}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Overlay "Ver mais" effect */}
            {hasMoreProjects && !showAll && (
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent"
                  style={{ height: '40%' }}
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(true)}
                    className="px-8 py-3 hover-scale transition-all duration-300 hover:shadow-lg bg-background/90 backdrop-blur-sm"
                  >
                    {language === 'pt' ? 'Ver mais' : 'See more'}
                  </Button>
                </div>
              </div>
            )}

          </div>

          {/* Show Less Button - only when showing all */}
          {hasMoreProjects && showAll && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                onClick={() => setShowAll(false)}
                className="px-8 py-3 hover-scale transition-all duration-300 hover:shadow-lg"
              >
                {language === 'pt' ? 'Ver menos' : 'Show less'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};