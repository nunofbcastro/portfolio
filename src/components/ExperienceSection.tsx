import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceSectionProps {
  language: 'pt' | 'en';
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
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
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            {text.title}
          </h2>

          <div className="space-y-8">
            {text.experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {exp.company}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};