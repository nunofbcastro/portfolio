import { Code, Palette, Cpu, Database, Smartphone, Layout, Cloud } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  language: "pt" | "en";
}

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Cpu,
  Database,
  Layout,
  Cloud,
};

export const AboutSection = ({ language }: AboutSectionProps) => {
  const text = portfolioData.about[language];

  return (
    <section id="sobre" className="relative py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl">
          <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">01 / {text.title}</p>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {text.title}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {text.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {text.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="border-t border-border/70 pt-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.description.map((desc, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="rounded-full border-border/50 bg-transparent px-2.5 py-0.5 font-mono-meta text-[10px] text-muted-foreground"
                    >
                      {desc}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
