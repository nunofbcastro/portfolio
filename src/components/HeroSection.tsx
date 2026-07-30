import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface HeroSectionProps {
  language: Language;
  heroImageUrl: string;
}

export const HeroSection = ({ language, heroImageUrl }: HeroSectionProps) => {
  const data = portfolioData.personal;
  const text = uiText[language];

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat print:hidden"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-background/78 dark:bg-background/86" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono-meta text-[10px] text-muted-foreground md:mb-6 md:text-xs">
            [ {data.title[language]} ]
          </p>

          <h1 className="mb-4 text-[2.75rem] font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            {data.name}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:mb-10 md:text-lg">
            {data.subtitle[language]}
          </p>

          <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2.5 print:hidden sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 sm:w-auto"
            >
              <a href="#projetos" data-cursor={text.hero.viewProjects}>
                {text.hero.viewProjects}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-full border-foreground/20 px-8 sm:w-auto"
            >
              <a href="#contacto" data-cursor={text.hero.contact}>
                {text.hero.contact}
              </a>
            </Button>
            <Button
              id="download-cv-button"
              variant="ghost"
              size="lg"
              className="h-11 w-full rounded-full px-6 text-muted-foreground sm:w-auto"
            >
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              {text.hero.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
