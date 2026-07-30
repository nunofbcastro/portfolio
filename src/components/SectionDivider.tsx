interface SectionDividerProps {
  text?: string;
  reverse?: boolean;
}

export const SectionDivider = ({
  text = "DEVELOPER / DIGITAL",
  reverse = false,
}: SectionDividerProps) => {
  const items = Array.from({ length: 8 }, () => text);

  return (
    <div className="relative overflow-hidden border-y border-border/60 py-3 no-print md:py-5" aria-hidden="true">
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item, index) => (
              <span
                key={`${copy}-${index}`}
                className="px-4 font-display text-2xl font-black tracking-tight text-foreground/15 sm:text-3xl md:px-6 md:text-5xl"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
