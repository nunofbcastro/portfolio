import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Cpu, Database } from "lucide-react";

interface AboutSectionProps {
  language: 'pt' | 'en';
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    pt: {
      title: "Sobre Mim",
      description: "Sou Engenheiro Informático, com experiência em desenvolvimento de software, design de interfaces e automação de processos. Gosto de criar ferramentas úteis, intuitivas e com impacto real na vida das pessoas.",
      skillsTitle: "Principais Competências",
      skills: [
        { icon: Code, title: "Desenvolvimento Web / Mobile", description: "React, TypeScript, Node.js" },
        { icon: Palette, title: "UI/UX Design", description: "Figma, Tailwind CSS, Design Systems" },
        { icon: Cpu, title: "Integrações e APIs", description: "REST, GraphQL, Microserviços" },
        { icon: Database, title: "Gestão de dados", description: "PostgreSQL, MongoDB, Redis" }
      ]
    },
    en: {
      title: "About Me",
      description: "I'm a Software Engineer with experience in software development, UI design, and process automation. I enjoy building useful, intuitive tools that create real impact.",
      skillsTitle: "Key Skills",
      skills: [
        { icon: Code, title: "Web / Mobile Development", description: "React, TypeScript, Node.js" },
        { icon: Palette, title: "UI/UX Design", description: "Figma, Tailwind CSS, Design Systems" },
        { icon: Cpu, title: "API Integrations", description: "REST, GraphQL, Microservices" },
        { icon: Database, title: "Data Management", description: "PostgreSQL, MongoDB, Redis" }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};