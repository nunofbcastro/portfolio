import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">{data.greeting[language]} </span>
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {data.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {data.title[language]}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {data.subtitle[language]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{data.location[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${data.email}`} className="hover:underline focus-visible:rounded-sm">
                {data.email}
              </a>
            </div>
            <div className="text-primary font-medium">
              {data.availability[language]}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#projetos">{text.hero.viewProjects}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contacto">{text.hero.contact}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
