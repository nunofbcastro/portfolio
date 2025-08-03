import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/FAQSection";
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
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
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

          <div className="max-w-2xl mx-auto mb-8">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-4 text-foreground text-center">
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
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-4 text-foreground text-center">
                  {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
                </h3>
                <FAQSection faq={data.faq} language={language} className="mt-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};