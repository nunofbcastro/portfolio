import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface HeroSectionProps {
  language: Language;
  heroImageUrl: string;
}

export const HeroSection = ({ language, heroImageUrl }: HeroSectionProps) => {
  const data = portfolioData.personal;
  const text = uiText[language];

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat print:hidden"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors print:hidden">
            {data.availability[language]}
          </Badge>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-snug tracking-tight">
            <span className="text-foreground">{data.greeting[language]} </span>
            <span className="text-gradient">
              {data.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-6 tracking-tight">
            {data.title[language]}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle[language]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm font-medium">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{data.location[language]}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors focus-visible:rounded-sm">
                {data.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
              <a href="#projetos">{text.hero.viewProjects}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105 active:scale-95">
              <a href="#contacto">{text.hero.contact}</a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleDownloadCV}
              className="h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FileText className="h-4 w-4 mr-2" aria-hidden="true" />
              {text.hero.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
