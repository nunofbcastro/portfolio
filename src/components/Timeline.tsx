import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number, isMobile: boolean) => ReactNode;
  className?: string;
  showLimitButton?: boolean;
  limitButtonText?: string;
  showMoreText?: string;
  showLessText?: string;
}

export const Timeline = <T,>({ 
  title, 
  items, 
  renderItem, 
  className,
  showLimitButton = false,
  showMoreText = "Ver mais",
  showLessText = "Ver menos"
}: TimelineProps<T>) => {
  const [width] = useWindowSize();
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Start with the mobile layout for SSR; switch to the two-column timeline at lg.
  const isMobile = !mounted ? true : width < 1024;
  const timelineListId = "timeline-list";

  // Determine which items to show
  const displayItems = showLimitButton && !showAll ? items.slice(0, 3) : items;
  const hasMoreItems = showLimitButton && items.length > 3;

  return (
    <section id="experiencia" className={`${className} py-20 md:py-32`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="mb-16"
          >
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">02 / {title}</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
              {title}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline - Only on desktop (1024px+) */}
            {!isMobile && (
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-primary via-primary to-transparent" />
            )}

            <div id={timelineListId} className={`${isMobile ? 'space-y-6' : 'space-y-8 md:space-y-16'}`}>
              {displayItems.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className={`${isMobile ? 'relative' : 'relative flex items-center min-h-[200px]'}`}>
                    {/* Timeline Dot - Only on desktop */}
                    {!isMobile && (
                      <div
                        className="absolute left-1/2 z-10 h-12 w-12 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50"
                      >
                        <div className="absolute inset-2 rounded-full bg-background" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          {(item as any).icon === "Briefcase" ? (
                            <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
                          ) : (item as any).icon === "Award" ? (
                            <Trophy className="h-6 w-6 text-primary" aria-hidden="true" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Connecting Line - Only on desktop */}
                    {!isMobile && (
                      <div
                        className={`absolute top-1/2 z-5 h-0.5 w-[60px] ${
                          isLeft
                            ? 'left-1/2 ml-4 bg-linear-to-r from-primary to-transparent'
                            : 'right-1/2 mr-4 bg-linear-to-l from-primary to-transparent'
                        }`}
                      />
                    )}

                    {/* Item Content */}
                    <div className={`flex-1 ${isMobile ? '' : (isLeft ? 'pr-4 md:pr-16' : 'pl-4 md:pl-16')}`}>
                      <div
                        className={`${!isMobile && isLeft ? 'ml-auto max-w-md' : ''} ${!isMobile && !isLeft ? 'mr-auto max-w-md' : ''}`}
                      >
                        {renderItem(item, index, isMobile)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show More/Less Button */}
            {hasMoreItems && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                  aria-expanded={showAll}
                  aria-controls={timelineListId}
                  className="px-8 py-3"
                >
                  {showAll ? showLessText : showMoreText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
