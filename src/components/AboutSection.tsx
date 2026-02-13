import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Cpu, Database, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  language: 'pt' | 'en';
}

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Cpu,
  Database
};

export const AboutSection = ({ language }: AboutSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const text = portfolioData.about[language];

  return (
    <section id="sobre" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-12'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {text.description}
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {text.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            const delay = 100 + (index * 100);
            return (
              <div
                key={index}
                className="transition-all duration-1000"
                style={{
                  transitionDelay: skillsVisible ? `${delay}ms` : '0ms',
                  opacity: skillsVisible ? 1 : 0,
                  transform: skillsVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <Card className="glass-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/5 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 flex justify-center flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-foreground tracking-tight">
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.description.map((desc, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/5 text-primary border-primary/10 group-hover:bg-primary/10 transition-colors">
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