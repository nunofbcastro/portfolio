import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Timeline } from "./Timeline";

interface EducationSectionProps {
  language: 'pt' | 'en';
}

export const EducationSection = ({ language }: EducationSectionProps) => {
  const text = portfolioData.education[language];

  return (
    <Timeline
      title={text.title}
      items={text.educations}
      className="bg-muted"
      renderItem={(edu, index, isMobile) => (
        <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {edu.institution}
                  </CardTitle>
                  <p className="text-lg font-semibold text-primary mt-1">
                    {edu.degree}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{edu.description}</p>
          </CardContent>
        </Card>
      )}
    />
  );
};
