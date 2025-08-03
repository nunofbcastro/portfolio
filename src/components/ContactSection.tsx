import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface ContactSectionProps {
  language: 'pt' | 'en';
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const data = portfolioData.contact[language];
  
  const iconMap = {
    Mail,
    Linkedin, 
    Github,
    Globe
  };

  return (
    <section id="contacto" className="bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {data.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {data.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  {language === 'pt' ? 'Ligações Sociais' : 'Social Links'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="flex items-center gap-2 justify-start"
                        onClick={() => window.open(link.href, '_blank')}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">FAQ</h3>
                <div className="space-y-4 text-sm">
                  {data.faq.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium text-foreground">
                        {item.question}
                      </p>
                      <p className="text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};