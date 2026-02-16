import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { GitHubIcon } from "./icons/BrandIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { uiText, type Language } from "@/data/i18n";
import { AutoFitText } from "@/components/AutoFitText";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectsSectionProps {
  language: Language;
}

const TechList = ({ technologies, language }: { technologies: string[], language: Language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = uiText[language];

  const displayTechs = isExpanded ? technologies : technologies.slice(0, 3);
  const hasMore = technologies.length > 3;

  return (
    <div className="flex flex-wrap gap-2.5 items-center mb-6">
      {displayTechs.map((tech, techIdx) => (
        <Badge key={techIdx} variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary border-primary/10">
          {tech}
        </Badge>
      ))}
      {hasMore && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className="text-xs font-bold text-primary hover:text-primary/80 transition-colors ml-1 px-2 py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/10"
        >
          {isExpanded ? text.projects.showLess : `+${technologies.length - 3}`}
        </button>
      )}
    </div>
  );
}

const ExpandableDescription = ({ text, readMoreText, showLessText }: { text: string, readMoreText: string, showLessText: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > 150;

  if (!shouldTruncate) {
    return <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{text}</p>;
  }

  return (
    <div className="mb-4 flex-grow">
      <p className={`text-muted-foreground leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="text-xs font-bold text-primary hover:text-primary/80 mt-2 hover:underline"
      >
        {isExpanded ? showLessText : readMoreText}
      </button>
    </div>
  );
};

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
    <section id="projetos" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground text-gradient">
              {text.title}
            </h2>
          </div>

          <div ref={projectsRef} className="relative p-2" style={{ maxHeight: showAll ? 'none' : '620px', overflow: showAll ? 'visible' : 'hidden' }}>
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
                    <Card className="glass-card group hover:scale-[1.02] origin-center h-full flex flex-col transition-premium border-none">
                      <CardHeader className="flex-shrink-0">
                        <CardTitle className="block">
                          <AutoFitText
                            text={project.title}
                            maxLines={2}
                            className="text-xl font-bold text-foreground group-hover:text-primary transition-colors block"
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <ExpandableDescription
                          text={project.description}
                          readMoreText={i18n.projects.readMore}
                          showLessText={i18n.projects.showLess}
                        />

                        <TechList technologies={project.technologies} language={language} />

                        <div className="flex gap-2 mt-auto flex-wrap">
                          <Button asChild size="sm" className="flex-1">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={viewProjectAriaLabel}>
                              <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                              {text.viewProject}
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={githubAriaLabel}>
                              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                            </a>
                          </Button>
                          {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="flex-1">
                                  <ImageIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                                  {i18n.projects.viewScreenshots}
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl">
                                <DialogHeader>
                                  <DialogTitle>{project.title} - {i18n.projects.viewScreenshots}</DialogTitle>
                                </DialogHeader>
                                <Carousel className="w-full">
                                  <CarouselContent>
                                    {(project as any).screenshots.map((screenshot: string, idx: number) => (
                                      <CarouselItem key={idx}>
                                        <div className="p-1">
                                          <img
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="w-full h-auto rounded-lg border shadow-lg object-contain max-h-[70vh]"
                                            loading="lazy"
                                          />
                                        </div>
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  <CarouselPrevious className="left-2" />
                                  <CarouselNext className="right-2" />
                                </Carousel>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Overlay "Ver mais" effect */}
            {hasMoreProjects && !showAll && (
              <div className="absolute bottom-0 left-[-50vw] right-[-50vw] pointer-events-none z-10 h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
                <div className="flex justify-center items-center h-full pointer-events-auto relative z-20">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(true)}
                    aria-expanded={showAll}
                    aria-controls={projectsListId}
                    className="px-10 py-6 rounded-full glass hover:shadow-xl transition-all duration-500 border-2 font-bold"
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
