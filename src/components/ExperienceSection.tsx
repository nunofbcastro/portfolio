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

          {/* Horizontal Timeline */}
          <div 
            ref={timelineRef}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden lg:block">
              <div 
                className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-2000 delay-500 ${
                  timelineVisible ? 'animate-draw-line' : 'w-0'
                }`}
              />
            </div>

            {/* Desktop Timeline Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 relative">
              {text.experiences.map((exp, index) => {
                const delay = 800 + (index * 300);
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 transition-all duration-500`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay}ms` : '0ms',
                        transform: timelineVisible 
                          ? 'translate(-50%, -50%) scale(1)' 
                          : 'translate(-50%, -50%) scale(0)'
                      }}
                    >
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Experience Card */}
                    <div 
                      className={`transition-all duration-700 ${
                        index % 2 === 0 ? 'mb-32' : 'mt-32'
                      }`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay + 200}ms` : '0ms',
                        opacity: timelineVisible ? 1 : 0,
                        transform: timelineVisible 
                          ? 'translateY(0)' 
                          : `translateY(${index % 2 === 0 ? '50px' : '-50px'})`
                      }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/80">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                {exp.company}
                              </h3>
                              <p className="font-semibold text-primary">
                                {exp.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
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

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {text.experiences.map((exp, index) => {
                const delay = 400 + (index * 200);
                return (
                  <div 
                    key={index}
                    className="transition-all duration-700"
                    style={{ 
                      transitionDelay: timelineVisible ? `${delay}ms` : '0ms',
                      opacity: timelineVisible ? 1 : 0,
                      transform: timelineVisible ? 'translateX(0)' : 'translateX(-30px)'
                    }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-foreground">
                              {exp.company}
                            </h3>
                            <p className="font-semibold text-primary">
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
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