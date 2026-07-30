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
    Globe,
  };

  return (
    <section id="contacto" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">04 / {data.title}</p>
            <h2 className="mb-5 text-4xl font-black tracking-tight text-foreground md:text-6xl">
              {data.title}
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">{data.subtitle}</p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              const externalLabel = `${link.label} (${text.accessibility.opensInNewTabSuffix})`;
              return (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="h-14 justify-start rounded-xl border-border/70 px-5"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={externalLabel}
                    data-cursor={link.label}
                  >
                    <Icon className="mr-3 h-4 w-4" aria-hidden="true" />
                    <span className="font-mono-meta text-[11px]">{link.label}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="border-t border-border/60 pt-10">
            <h3 className="mb-4 font-mono-meta text-[11px] text-muted-foreground">
              {text.contact.faq}
            </h3>
            <FAQSection faq={data.faq} language={language} className="mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
