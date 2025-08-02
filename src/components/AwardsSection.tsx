import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Timeline } from "./Timeline";

interface AwardsSectionProps {
  language: 'pt' | 'en';
}

export const AwardsSection = ({ language }: AwardsSectionProps) => {
  const data = portfolioData.awards[language];

  return (
    <Timeline
      title={data.title}
      items={data.awards}
      className="bg-background"
      renderItem={(award, index, isMobile) => (
        <Card className="hover:shadow-xl hover:scale-105">
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
      )}
    />
  );
};