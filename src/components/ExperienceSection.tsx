import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

interface ExperienceSectionProps {
  language: 'pt' | 'en';
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);
  
  const data = portfolioData.experience[language];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {data.title}
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Central Timeline */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 transition-all duration-1000 ${
              timelineVisible ? 'bg-gradient-to-b from-primary via-primary to-transparent scale-y-100' : 'scale-y-0'
            }`} />

            <div className="space-y-8 md:space-y-16">
              {data.experiences.map((exp, index) => {
                const delay = index * 200;
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative flex items-center min-h-[200px]">
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full transition-all duration-1000 ${
                        timelineVisible 
                          ? 'bg-primary scale-100 shadow-lg shadow-primary/50' 
                          : 'bg-muted scale-0'
                      }`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay + 400}ms` : '0ms',
                      }}
                    >
                      <div className={`absolute inset-2 bg-background rounded-full transition-all duration-1000 ${
                        timelineVisible ? 'scale-100' : 'scale-0'
                      }`} style={{ transitionDelay: timelineVisible ? `${delay + 600}ms` : '0ms' }} />
                    </div>

                    {/* Connecting Line */}
                    <div 
                      className={`absolute top-1/2 z-5 h-0.5 bg-gradient-to-r transition-all duration-1000 ${
                        isLeft 
                          ? 'right-1/2 mr-4 bg-gradient-to-l from-primary to-transparent' 
                          : 'left-1/2 ml-4 bg-gradient-to-r from-primary to-transparent'
                      }`}
                      style={{ 
                        transitionDelay: timelineVisible ? `${delay + 600}ms` : '0ms',
                        width: timelineVisible ? '60px' : '0px'
                      }}
                    />

                    {/* Experience Card */}
                    <div className={`flex-1 ${isMobile ? 'pl-8' : (isLeft ? 'pr-4 md:pr-16' : 'pl-4 md:pl-16')}`}>
                      <Card 
                        className={`transition-all duration-1000 hover:shadow-xl hover:scale-105 ${
                          timelineVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        } ${!isMobile && isLeft ? 'ml-auto max-w-md' : ''} ${!isMobile && !isLeft ? 'mr-auto max-w-md' : ''}`}
                        style={{ 
                          transitionDelay: timelineVisible ? `${delay}ms` : '0ms'
                        }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                              <p className="font-semibold text-primary">{exp.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.description.map((desc, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{desc}</span>
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