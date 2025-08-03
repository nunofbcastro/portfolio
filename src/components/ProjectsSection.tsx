import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";

interface ProjectsSectionProps {
  language: 'pt' | 'en';
}

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  
  const text = portfolioData.projects[language];

  return (
    <section id="projetos" className="bg-gradient-to-b from-muted to-background">
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

          <div ref={projectsRef} className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {text.projects.map((project, index) => {
              const delay = 200 + (index * 200);
              return (
                <div
                  key={index}
                  className="transition-all duration-700 mb-8 inline-block w-full"
                  style={{ 
                    transitionDelay: projectsVisible ? `${delay}ms` : '0ms',
                    opacity: projectsVisible ? 1 : 0,
                    transform: projectsVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)'
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
        </div>
      </div>
    </section>
  );
};