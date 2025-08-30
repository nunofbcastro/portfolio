
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

interface TimelineProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number, isMobile: boolean) => ReactNode;
  className?: string;
}

export const Timeline = <T,>({ title, items, renderItem, className }: TimelineProps<T>) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const [width] = useWindowSize();
  const isMobile = width < 1160;

  return (
    <section className={`${className} py-20 md:py-32`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Timeline - Only on desktop (1024px+) */}
            {!isMobile && (
              <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 transition-all duration-1000 ${
                timelineVisible ? 'bg-linear-to-b from-primary via-primary to-transparent scale-y-100' : 'scale-y-0'
              }`} />
            )}

            <div className={`${isMobile ? 'space-y-6' : 'space-y-8 md:space-y-16'}`}>
              {items.map((item, index) => {
                const delay = index * 200;
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className={`${isMobile ? 'relative' : 'relative flex items-center min-h-[200px]'}`}>
                    {/* Timeline Dot - Only on desktop */}
                    {!isMobile && (
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full transition-all duration-1000 ${
                          timelineVisible
                            ? 'bg-primary scale-100 shadow-lg shadow-primary/50'
                            : 'bg-muted scale-0'
                        }`}
                        style={{
                          transitionDelay: timelineVisible ? `${delay + 400}ms` : '0ms',
                        }}
                      >
                        <div className={`absolute inset-2 bg-background rounded-full transition-all duration-1000 ${
                          timelineVisible ? 'scale-100' : 'scale-0'
                        }`} style={{ transitionDelay: timelineVisible ? `${delay + 600}ms` : '0ms' }} />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          {item.icon === "Briefcase" ? (
                            <Briefcase className="h-6 w-6 text-primary" />
                          ) : item.icon === "Award" ? (
                            <Trophy className="h-6 w-6 text-primary" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-primary" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Connecting Line - Only on desktop */}
                    {!isMobile && (
                      <div
                        className={`absolute top-1/2 z-5 h-0.5 transition-all duration-1000 ${
                          isLeft
                            ? 'left-1/2 ml-4 bg-linear-to-r from-primary to-transparent'
                            : 'right-1/2 mr-4 bg-linear-to-l from-primary to-transparent'
                        }`}
                        style={{
                          transitionDelay: timelineVisible ? `${delay + 600}ms` : '0ms',
                          width: timelineVisible ? '60px' : '0px'
                        }}
                      />
                    )}

                    {/* Item Content */}
                    <div className={`flex-1 ${isMobile ? '' : (isLeft ? 'pr-4 md:pr-16' : 'pl-4 md:pl-16')}`}>
                      <div
                        className={`transition-all duration-1000 ${
                          timelineVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                        } ${!isMobile && isLeft ? 'ml-auto max-w-md' : ''} ${!isMobile && !isLeft ? 'mr-auto max-w-md' : ''}`}
                        style={{
                          transitionDelay: timelineVisible ? `${delay}ms` : '0ms'
                        }}
                      >
                        {renderItem(item, index, isMobile)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
