import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons/BrandIcons";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface ContactSectionProps {
  language: Language;
}

// Fun physics objects with absolute base-path safe URLs
const BASE_PATH = "/portfolio";

const GRAVITY_FUN_OBJECTS = [
  { type: "image", src: `${BASE_PATH}/fun_duck.png`, label: "Rubber Duck", w: 120, h: 120 },
  { type: "image", src: `${BASE_PATH}/fun_strawberry.png`, label: "Strawberry", w: 120, h: 120 },
  { type: "image", src: `${BASE_PATH}/fun_unicorn.png`, label: "Unicorn", w: 130, h: 130 },
  { type: "image", src: `${BASE_PATH}/fun_computer.png`, label: "Retro PC", w: 130, h: 130 },
  { type: "tag", label: "REACT", bg: "#06b6d4", color: "#ffffff", w: 120, h: 46 },
  { type: "tag", label: "TYPESCRIPT", bg: "#3b82f6", color: "#ffffff", w: 140, h: 46 },
  { type: "tag", label: ".NET CORE", bg: "#8b5cf6", color: "#ffffff", w: 130, h: 46 },
  { type: "tag", label: "ANDROID", bg: "#22c55e", color: "#ffffff", w: 120, h: 46 },
  { type: "tag", label: "AZURE", bg: "#0284c7", color: "#ffffff", w: 110, h: 46 },
  { type: "tag", label: "PYTHON", bg: "#eab308", color: "#ffffff", w: 115, h: 46 },
];

export const ContactSection = ({ language }: ContactSectionProps) => {
  const data = portfolioData.contact[language];
  const text = uiText[language];
  const [resetKey, setResetKey] = useState(0);

  const iconMap = {
    Mail,
    Linkedin: LinkedInIcon,
    Github: GitHubIcon,
    Globe,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight || 480;

    // Engine with gravity
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1.6 } });

    // Runner
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Walls
    const wallOpts = { isStatic: true, render: { visible: false } } as Matter.IChamferableBodyDefinition;
    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(W / 2, H + 25, W * 2, 50, wallOpts),   // floor
      Matter.Bodies.rectangle(-25, H / 2, 50, H * 2, wallOpts),       // left
      Matter.Bodies.rectangle(W + 25, H / 2, 50, H * 2, wallOpts),    // right
    ]);

    // Create physical bodies
    const bodies = GRAVITY_FUN_OBJECTS.map((obj, i) => {
      const cols = 4;
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = (W / (cols + 1)) * (col + 1) + (Math.random() * 40 - 20);
      const y = -obj.h - row * (obj.h + 20) - 30;

      return Matter.Bodies.rectangle(x, y, obj.w, obj.h, {
        chamfer: { radius: obj.type === "image" ? 24 : 23 },
        restitution: 0.5,
        friction: 0.3,
        frictionAir: 0.015,
        angle: (Math.random() - 0.5) * 0.6,
        render: { visible: false },
      });
    });
    Matter.Composite.add(engine.world, bodies);

    // Mouse drag constraint
    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.25, render: { visible: false } },
    });
    (mouse as any).element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    (mouse as any).element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    Matter.Composite.add(engine.world, mouseConstraint);

    // Sync DOM element position to physics body every frame
    let rafId: number;
    const sync = () => {
      bodies.forEach((body, i) => {
        const el = objectRefs.current[i];
        if (!el) return;
        el.style.left = `${body.position.x - GRAVITY_FUN_OBJECTS[i].w / 2}px`;
        el.style.top  = `${body.position.y - GRAVITY_FUN_OBJECTS[i].h / 2}px`;
        el.style.transform = `rotate(${body.angle}rad)`;
      });
      rafId = requestAnimationFrame(sync);
    };
    rafId = requestAnimationFrame(sync);

    return () => {
      cancelAnimationFrame(rafId);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, [resetKey]);

  return (
    <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">

          {/* Section Header */}
          <div className="mb-8">
            <p className="mb-3 font-mono-meta text-[11px] text-muted-foreground">04 / {data.title}</p>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-6xl">
              {data.title}
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">{data.subtitle}</p>
          </div>

          {/* ── GRAVITY SECTION WITH FUN STICKERS ────────────────────────────────────── */}
          <div className="mb-14 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <span className="font-mono-meta text-xs uppercase tracking-widest text-muted-foreground">
                [ {language === "pt" ? "Brinca com os objetos" : "Play with objects"} ]
              </span>
              <button
                onClick={() => setResetKey(k => k + 1)}
                className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                ↺ {language === "pt" ? "reiniciar" : "reset"}
              </button>
            </div>

            {/* Physics container */}
            <div
              ref={containerRef}
              className="relative overflow-hidden select-none"
              style={{ height: 480 }}
            >
              {/* Headline behind objects */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center select-none">
                <h3 className="text-4xl font-black leading-[0.95] tracking-tight text-foreground/15 sm:text-6xl md:text-7xl lg:text-8xl">
                  {language === "pt" ? <>Vamos falar<br />sobre o seu<br />projeto</> : <>Let&apos;s talk<br />about your<br />project</>}
                </h3>
              </div>

              {/* DOM physics objects */}
              {GRAVITY_FUN_OBJECTS.map((obj, i) => (
                <div
                  key={`${resetKey}-${i}`}
                  ref={el => { objectRefs.current[i] = el; }}
                  className="absolute"
                  style={{ width: obj.w, height: obj.h, willChange: "transform" }}
                >
                  {obj.type === "image" ? (
                    <img
                      src={obj.src}
                      alt={obj.label}
                      draggable={false}
                      className="w-full h-full object-contain pointer-events-none drop-shadow-xl"
                    />
                  ) : (
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center shadow-lg border-2 border-white/90 px-4"
                      style={{ backgroundColor: obj.bg, color: obj.color }}
                    >
                      <span className="font-mono-meta text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                        {obj.label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
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

          {/* FAQ */}
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
