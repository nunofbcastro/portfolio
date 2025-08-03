import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Cpu, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  language: 'pt' | 'en';
}

const iconMap = {
  Code,
  Palette,
  Cpu,
  Database
};

export const AboutSection = ({ language }: AboutSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  
  const text = portfolioData.about[language];

  return (
    <section id="sobre" className="bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {text.description}
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            const delay = 200 + (index * 150);
            return (
              <div
                key={index}
                className="transition-all duration-700"
                style={{ 
                  transitionDelay: skillsVisible ? `${delay}ms` : '0ms',
                  opacity: skillsVisible ? 1 : 0,
                  transform: skillsVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.description.map((desc, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {desc}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};