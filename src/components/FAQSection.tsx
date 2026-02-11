import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { uiText, type Language } from "@/data/i18n";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faq: FAQItem[];
  language: Language;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faq, language, className }) => {
  const sectionLabel = uiText[language].faq.sectionLabel;

  return (
    <div className={className} aria-label={sectionLabel}>
      <Accordion type="single" collapsible className="w-full" aria-label={sectionLabel}>
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base font-semibold text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
