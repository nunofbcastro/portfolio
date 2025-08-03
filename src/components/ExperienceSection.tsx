import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Timeline } from "./Timeline";

interface ExperienceSectionProps {
  language: 'pt' | 'en';
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const data = portfolioData.experience[language];

  return (
    <Timeline
      title={data.title}
      items={data.experiences}
      renderItem={(exp, index, isMobile) => (
        <Card className="hover:shadow-xl hover:scale-105">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl text-foreground mb-1">{exp.role}</h3>
                  <p className="font-semibold text-primary text-lg">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 md:items-end">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul className="space-y-2 mb-4">
              {exp.description.map((desc, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIdx) => (
                  <Badge key={techIdx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    />
  );
};