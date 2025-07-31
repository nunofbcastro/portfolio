import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ExperienceSectionProps {
  language: 'pt' | 'en';
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  const content = {
    pt: {
      title: "Experiência",
      experiences: [
        {
          company: "TechNova Solutions",
          role: "Engenheiro de Software",
          location: "Lisboa, Portugal",
          period: "2022 – Presente",
          description: [
            "Desenvolvimento de aplicações web e mobile",
            "Integração com APIs externas",
            "Participação em planeamento ágil (Scrum)"
          ]
        },
        {
          company: "Digital Innovations",
          role: "Desenvolvedor Frontend",
          location: "Porto, Portugal",
          period: "2020 – 2022",
          description: [
            "Criação de interfaces modernas e responsivas",
            "Optimização de performance e SEO",
            "Colaboração com equipas multidisciplinares"
          ]
        },
        {
          company: "StartupLab",
          role: "Developer Júnior",
          location: "Braga, Portugal",
          period: "2019 – 2020",
          description: [
            "Desenvolvimento de protótipos",
            "Testes e debugging",
            "Documentação técnica"
          ]
        }
      ]
    },
    en: {
      title: "Experience",
      experiences: [
        {
          company: "TechNova Solutions",
          role: "Software Engineer",
          location: "Lisbon, Portugal",
          period: "2022 – Present",
          description: [
            "Web and mobile app development",
            "Integration with external APIs",
            "Agile planning and collaboration (Scrum)"
          ]
        },
        {
          company: "Digital Innovations",
          role: "Frontend Developer",
          location: "Porto, Portugal",
          period: "2020 – 2022",
          description: [
            "Modern and responsive interface creation",
            "Performance and SEO optimization",
            "Cross-functional team collaboration"
          ]
        },
        {
          company: "StartupLab",
          role: "Junior Developer",
          location: "Braga, Portugal",
          period: "2019 – 2020",
          description: [
            "Prototype development",
            "Testing and debugging",
            "Technical documentation"
          ]
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="experiencia" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Animated Title */}
          <div 
            ref={titleRef}
            className={`text-center mb-20 transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {text.title}
            </h2>
          </div>

          {/* Vertical Timeline */}
          <div 
            ref={timelineRef}
            className="relative max-w-6xl mx-auto"
          >
            {/* Main Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-muted/30 transform -translate-x-1/2">
              <div 
                className={`w-full bg-gradient-to-b from-primary via-accent to-primary transition-all duration-3000 delay-500 ${
                  timelineVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-16 py-8">
              {text.experiences.map((exp, index) => {
                const delay = 800 + (index * 400);
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex items-center min-h-[200px]">
                    {/* Connection Line from dot to card */}
                    <div 
                      className={`absolute top-1/2 z-5 h-0.5 bg-gradient-to-r transition-all duration-1000 ${
                        isLeft 
                          ? 'left-1/2 ml-4 bg-gradient-to-r from-primary to-transparent' 
                          : 'right-1/2 mr-4 bg-gradient-to-l from-primary to-transparent'
                      }`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay + 600}ms` : '0ms',
                        width: timelineVisible ? '120px' : '0px',
                        opacity: timelineVisible ? 1 : 0,
                        boxShadow: timelineVisible ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
                      }}
                    />

                    {/* Timeline Dot with enhanced animations */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div 
                        className={`relative w-12 h-12 bg-primary rounded-full border-4 border-background shadow-2xl transition-all duration-700 flex items-center justify-center`}
                        style={{ 
                          transitionDelay: timelineVisible ? `${delay}ms` : '0ms',
                          transform: timelineVisible 
                            ? 'scale(1) rotate(360deg)' 
                            : 'scale(0) rotate(0deg)',
                          boxShadow: timelineVisible 
                            ? '0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)' 
                            : 'none'
                        }}
                      >
                        {/* Pulsing rings */}
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                        <div 
                          className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"
                          style={{ animationDelay: '0.5s' }}
                        />
                        <Calendar className="h-5 w-5 text-background z-10" />
                      </div>
                      
                      {/* Enhanced Date Badge */}
                      <div 
                        className={`absolute top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-background px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-700 shadow-lg`}
                        style={{ 
                          transitionDelay: timelineVisible ? `${delay + 300}ms` : '0ms',
                          opacity: timelineVisible ? 1 : 0,
                          transform: timelineVisible 
                            ? 'translateX(-50%) translateY(0) scale(1)' 
                            : 'translateX(-50%) translateY(20px) scale(0.8)',
                          boxShadow: timelineVisible 
                            ? '0 8px 25px hsl(var(--primary) / 0.3)' 
                            : 'none'
                        }}
                      >
                        {exp.period}
                      </div>
                    </div>

                    {/* Enhanced Experience Card */}
                    <div 
                      className={`w-full max-w-lg transition-all duration-1000 ${
                        isLeft ? 'mr-auto pr-8 lg:pr-24' : 'ml-auto pl-8 lg:pl-24'
                      }`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay + 500}ms` : '0ms',
                        opacity: timelineVisible ? 1 : 0,
                        transform: timelineVisible 
                          ? 'translateX(0) translateY(0) scale(1)' 
                          : `translateX(${isLeft ? '-80px' : '80px'}) translateY(30px) scale(0.9)`
                      }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card via-card/95 to-card/80 border-2 border-transparent hover:border-primary/20 backdrop-blur-sm">
                        <CardContent className="p-8 relative overflow-hidden">
                          {/* Subtle background pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg">
                              <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                                {exp.company}
                              </h3>
                              <p className="font-semibold text-primary text-lg">
                                {exp.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-muted-foreground mb-6 relative z-10">
                            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>

                          <ul className="space-y-3 relative z-10">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm group/item">
                                <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};