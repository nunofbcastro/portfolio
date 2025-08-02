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
      className="bg-gradient-to-b from-background to-muted"
      renderItem={(exp, index, isMobile) => (
        <Card className="hover:shadow-xl hover:scale-105">
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