import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { GitHubIcon } from "./icons/BrandIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { uiText, type Language } from "@/data/i18n";
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

const TechList = ({ technologies, language }: { technologies: string[]; language: Language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = uiText[language];
  const displayTechs = isExpanded ? technologies : technologies.slice(0, 4);
  const hasMore = technologies.length > 4;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      {displayTechs.map((tech, techIdx) => (
        <Badge
          key={techIdx}
          variant="secondary"
          className="rounded-full border-border/60 bg-transparent px-2.5 py-0.5 font-mono-meta text-[10px] text-muted-foreground"
        >
          {tech}
        </Badge>
      ))}
      {hasMore && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className="px-2 py-1 font-mono-meta text-[10px] text-primary transition-colors hover:text-primary/80"
        >
          {isExpanded ? text.projects.showLess : `+${technologies.length - 4}`}
        </button>
      )}
    </div>
  );
};

const ExpandableDescription = ({
  text,
  readMoreText,
  showLessText,
}: {
  text: string;
  readMoreText: string;
  showLessText: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > 160;

  if (!shouldTruncate) {
    return <p className="mb-4 flex-grow leading-relaxed text-muted-foreground">{text}</p>;
  }

  return (
    <div className="mb-4 flex-grow">
      <p className={`leading-relaxed text-muted-foreground ${isExpanded ? "" : "line-clamp-3"}`}>
        {text}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="mt-2 font-mono-meta text-[10px] text-primary hover:underline"
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

  const text = portfolioData.projects[language];
  const i18n = uiText[language];
  const visibleCount = showAll ? text.projects.length : Math.min(4, text.projects.length);
  const hasMoreProjects = text.projects.length > 4;
  const projectsListId = "projects-list";

  return (
    <section id="projetos" className="relative overflow-hidden py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div
            ref={titleRef}
            className={`mb-10 transition-all duration-1000 md:mb-14 ${
              titleVisible ? "animate-fade-in" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">
              03 / {i18n.projects.indexLabel}
            </p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {text.title}
            </h2>
          </div>

          <div
            ref={projectsRef}
            id={projectsListId}
            className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14"
          >
            {text.projects.slice(0, visibleCount).map((project, index) => {
              const delay = 120 + index * 90;
              const screenshots = (project as { screenshots?: string[] }).screenshots ?? [];
              const cover = screenshots[0];
              const viewProjectAriaLabel = `${text.viewProject}: ${project.title} (${i18n.accessibility.opensInNewTabSuffix})`;
              const githubAriaLabel = `${i18n.projects.githubLabel}: ${project.title} (${i18n.accessibility.opensInNewTabSuffix})`;

              return (
                <article
                  key={index}
                  className="group flex flex-col transition-all duration-700"
                  style={{
                    transitionDelay: projectsVisible ? `${delay}ms` : "0ms",
                    opacity: projectsVisible ? 1 : 0,
                    transform: projectsVisible ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={i18n.projects.viewDemo}
                    aria-label={viewProjectAriaLabel}
                    className="relative mb-5 block aspect-[16/11] overflow-hidden rounded-xl border border-border/50 bg-muted"
                  >
                    {cover ? (
                      <img
                        src={cover}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono-meta text-xs text-muted-foreground">
                        {project.title}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                    <span className="absolute bottom-3 left-3 font-mono-meta text-[10px] text-white/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    <ExpandableDescription
                      text={project.description}
                      readMoreText={i18n.projects.readMore}
                      showLessText={i18n.projects.showLess}
                    />

                    <TechList technologies={project.technologies} language={language} />

                    <div className="mt-auto flex flex-wrap gap-2">
                      <Button asChild size="sm" className="rounded-full">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={viewProjectAriaLabel}
                          data-cursor={i18n.projects.viewDemo}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                          {text.viewProject}
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={githubAriaLabel}
                        >
                          <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                      {screenshots.length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-full">
                              <ImageIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                              {i18n.projects.viewScreenshots}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl">
                            <DialogHeader>
                              <DialogTitle>
                                {project.title} - {i18n.projects.viewScreenshots}
                              </DialogTitle>
                            </DialogHeader>
                            <Carousel className="w-full">
                              <CarouselContent>
                                {screenshots.map((screenshot, idx) => (
                                  <CarouselItem key={idx}>
                                    <div className="p-1">
                                      <img
                                        src={screenshot}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="max-h-[70vh] w-full rounded-lg border object-contain shadow-lg"
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
                  </div>
                </article>
              );
            })}
          </div>

          {hasMoreProjects && (
            <div className="mt-14 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                aria-controls={projectsListId}
                className="rounded-full border-2 px-10 py-6 font-mono-meta text-xs"
              >
                {showAll ? i18n.projects.showLess : i18n.projects.seeMore}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
