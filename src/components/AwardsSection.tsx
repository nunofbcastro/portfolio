import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface AwardsSectionProps {
  language: 'pt' | 'en';
}

export const AwardsSection = ({ language }: AwardsSectionProps) => {
  const data = portfolioData.awards[language];

  return (
    <section id="premios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            {data.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-1">
                        {award.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {award.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{award.date}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {award.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};