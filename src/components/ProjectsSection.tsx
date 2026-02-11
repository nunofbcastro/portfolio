import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { uiText, type Language } from "@/data/i18n";

interface ProjectsSectionProps {
  language: Language;
}

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const [width] = useWindowSize();
  
  const text = portfolioData.projects[language];
  const i18n = uiText[language];
  
  // Determine how many projects to show in first row based on screen size
  const getFirstRowCount = () => {
    if (width >= 1024) return 3; // lg: 3 columns
    if (width >= 768) return 2;  // md: 2 columns
    return 1; // mobile: 1 column
  };
  
  const firstRowCount = getFirstRowCount();
  const hasMoreProjects = text.projects.length > firstRowCount;
  const projectsListId = "projects-list";

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

          <div ref={projectsRef} className="relative overflow-hidden p-2" style={{ maxHeight: showAll ? 'none' : '620px' }}>
            <div id={projectsListId} className="columns-1 md:columns-2 lg:columns-3 gap-8">
               {text.projects.map((project, index) => {
                 const delay = 200 + (index * 200);
                 const viewProjectAriaLabel =
                   `${text.viewProject}: ${project.title} (${i18n.accessibility.opensInNewTabSuffix})`;
                 const githubAriaLabel =
                   `${i18n.projects.githubLabel}: ${project.title} (${i18n.accessibility.opensInNewTabSuffix})`;
                 
                 return (
                   <div
                     key={index}
                     className="transition-all duration-700 mb-8 inline-block w-full p-1"
                     style={{ 
                       transitionDelay: projectsVisible ? `${delay}ms` : '0ms',
                       opacity: projectsVisible ? 1 : 0,
                       transform: projectsVisible ? 'translateY(0)' : 'translateY(50px)'
                     }}
                   >
                     <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 origin-center h-full flex flex-col">
                       <CardHeader className="flex-shrink-0">
                         <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                           {project.title}
                         </CardTitle>
                       </CardHeader>
                       <CardContent className="flex-grow flex flex-col">
                         <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                           {project.description}
                         </p>
                         
                         <div className="flex flex-wrap gap-2 mb-6">
                           {project.technologies.map((tech, i) => (
                             <Badge key={i} variant="secondary" className="text-xs">
                               {tech}
                             </Badge>
                           ))}
                         </div>

                         <div className="flex gap-2 mt-auto">
                           <Button asChild size="sm" className="flex-1">
                             <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={viewProjectAriaLabel}>
                               <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                               {text.viewProject}
                             </a>
                           </Button>
                           <Button asChild variant="outline" size="sm">
                             <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={githubAriaLabel}>
                               <Github className="h-4 w-4" aria-hidden="true" />
                             </a>
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
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 h-40">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="flex justify-center items-center h-full pointer-events-auto relative z-20">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(true)}
                    aria-expanded={showAll}
                    aria-controls={projectsListId}
                    className="px-8 py-3 hover-scale transition-all duration-300 hover:shadow-lg bg-background border-2 shadow-lg"
                  >
                    {i18n.projects.seeMore}
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
                aria-expanded={showAll}
                aria-controls={projectsListId}
                className="px-8 py-3 hover-scale transition-all duration-300 hover:shadow-lg"
              >
                {i18n.projects.showLess}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
