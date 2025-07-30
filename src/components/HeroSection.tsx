import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  language: 'pt' | 'en';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    pt: {
      greeting: "Olá, sou o",
      name: "João Silva!",
      title: "Engenheiro Informático em Portugal",
      subtitle: "apaixonado por tecnologia, inovação e soluções digitais eficientes.",
      location: "Portugal",
      email: "joao@exemplo.com",
      availability: "Disponível para novos desafios",
      viewProjects: "Ver Projetos",
      contact: "Contactar"
    },
    en: {
      greeting: "Hello, I'm",
      name: "João Silva!",
      title: "Software Engineer based in Portugal",
      subtitle: "passionate about technology, innovation, and efficient digital solutions.",
      location: "Portugal",
      email: "joao@exemplo.com",
      availability: "Open to new opportunities",
      viewProjects: "View Projects",
      contact: "Contact"
    }
  };

  const text = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">{text.greeting} </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {text.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {text.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{text.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>{text.email}</span>
            </div>
            <div className="text-primary font-medium">
              {text.availability}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {text.viewProjects}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {text.contact}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};