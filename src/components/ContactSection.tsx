import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons/BrandIcons";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface ContactSectionProps {
  language: Language;
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const data = portfolioData.contact[language];
  const text = uiText[language];

  const iconMap = {
    Mail,
    Linkedin: LinkedInIcon,
    Github: GitHubIcon,
    Globe
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-linear-to-b from-muted to-background">
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
                  {text.contact.socialLinks}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    const externalLabel = `${link.label} (${text.accessibility.opensInNewTabSuffix})`;
                    return (
                      <Button key={index} asChild variant="outline" className="flex items-center gap-2 justify-start">
                        <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={externalLabel}>
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {link.label}
                        </a>
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
                  {text.contact.faq}
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
