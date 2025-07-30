import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  language: 'pt' | 'en';
}

export const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const content = {
    pt: {
      title: "Testemunhos",
      testimonials: [
        {
          text: "O João trouxe grande valor técnico e humano à nossa equipa. A sua capacidade de resolver problemas complexos é impressionante.",
          author: "Maria Silva",
          role: "CTO, TechNova Solutions",
          rating: 5
        },
        {
          text: "Trabalhar com o João foi uma experiência fantástica. Entregou sempre projetos de alta qualidade dentro dos prazos.",
          author: "Pedro Santos",
          role: "Product Manager, Digital Innovations",
          rating: 5
        },
        {
          text: "Profissional dedicado e com excelente capacidade de comunicação. Recomendo vivamente os seus serviços.",
          author: "Ana Costa",
          role: "Founder, StartupLab",
          rating: 5
        }
      ]
    },
    en: {
      title: "Testimonials",
      testimonials: [
        {
          text: "João added great technical and human value to our team. His ability to solve complex problems is impressive.",
          author: "Maria Silva",
          role: "CTO, TechNova Solutions",
          rating: 5
        },
        {
          text: "Working with João was a fantastic experience. He always delivered high-quality projects within deadlines.",
          author: "Pedro Santos",
          role: "Product Manager, Digital Innovations",
          rating: 5
        },
        {
          text: "Dedicated professional with excellent communication skills. I highly recommend his services.",
          author: "Ana Costa",
          role: "Founder, StartupLab",
          rating: 5
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            {text.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {text.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};