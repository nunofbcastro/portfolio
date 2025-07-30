import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationSectionProps {
  language: 'pt' | 'en';
}

export const EducationSection = ({ language }: EducationSectionProps) => {
  const content = {
    pt: {
      title: "Educação",
      education: [
        {
          institution: "Universidade de Lisboa",
          degree: "Mestrado em Engenharia Informática",
          location: "Lisboa, Portugal",
          period: "2018 – 2020",
          description: "Especialização em Sistemas Distribuídos e Inteligência Artificial"
        },
        {
          institution: "Instituto Superior Técnico",
          degree: "Licenciatura em Engenharia Informática",
          location: "Lisboa, Portugal",
          period: "2015 – 2018",
          description: "Projetos em C, Java, Python, Redes, e Sistemas Distribuídos"
        }
      ]
    },
    en: {
      title: "Education",
      education: [
        {
          institution: "University of Lisbon",
          degree: "Master's in Computer Engineering",
          location: "Lisbon, Portugal",
          period: "2018 – 2020",
          description: "Specialization in Distributed Systems and Artificial Intelligence"
        },
        {
          institution: "Instituto Superior Técnico",
          degree: "Bachelor's in Computer Engineering",
          location: "Lisbon, Portugal",
          period: "2015 – 2018",
          description: "Projects in C, Java, Python, Networking, and Distributed Systems"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            {text.title}
          </h2>

          <div className="space-y-6">
            {text.education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};