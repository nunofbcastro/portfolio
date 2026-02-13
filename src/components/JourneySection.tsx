import React from 'react';
import { Timeline } from "@/components/Timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";
import type { Language } from "@/data/i18n";
import { portfolioData } from "@/data/portfolio";
import { uiText } from "@/data/i18n";

interface JourneySectionProps {
    language: Language;
}

export const JourneySection = ({ language }: JourneySectionProps) => {
    const text = uiText[language];
    const { timeline } = portfolioData;

    return (
        <Timeline
            title={timeline[language].title}
            items={timeline[language].items}
            showLimitButton={true}
            showMoreText={text.projects.readMore}
            showLessText={text.projects.showLess}
            renderItem={(item: any, index, isMobile) => {
                const Icon = item.icon === "Briefcase" ? Briefcase : (item.icon === "Award" ? Trophy : GraduationCap);
                return (
                    <Card className="glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`p-4 bg-primary/10 rounded-xl shrink-0 ${!isMobile ? 'hidden' : ''}`}>
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        {item.type === "experience" ? (
                                            <>
                                                <h3 className="font-bold text-2xl text-foreground mb-1 tracking-tight">{item.role}</h3>
                                                <p className="font-semibold text-primary text-lg">{item.company}</p>
                                            </>
                                        ) : item.type === "education" ? (
                                            <>
                                                <h3 className="font-bold text-2xl text-foreground mb-1 tracking-tight">{item.degree}</h3>
                                                <p className="font-semibold text-primary text-lg">{item.institution}</p>
                                            </>
                                        ) : (
                                            <>
                                                <h3 className="font-bold text-2xl text-foreground mb-1 tracking-tight">{item.title}</h3>
                                                <p className="font-semibold text-primary text-lg">{item.issuer}</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 md:items-end text-sm font-medium">
                                    <div className="flex items-center gap-2 text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                                        <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span>{item.period}</span>
                                    </div>
                                    {item.location && (
                                        <div className="flex items-center gap-2 text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                                            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>{item.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {item.description && (
                                Array.isArray(item.description) ? (
                                    <ul className="space-y-3 mb-6">
                                        {item.description.map((desc: string, idx: number) => (
                                            <li key={idx} className="text-base text-muted-foreground flex items-start gap-3">
                                                <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                                )
                            )}

                            {item.technologies && item.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2.5">
                                    {item.technologies.map((tech: string, techIdx: number) => (
                                        <Badge key={techIdx} variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary border-primary/10">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                );
            }}
        />
    );
};
