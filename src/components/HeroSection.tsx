import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";

interface HeroSectionProps {
  language: Language;
  heroImageUrl: string;
}

// 100% transparent PNG stickers (no background)
const BASE_PATH = "/portfolio";
const FUN_ONLY_IMAGES = [
  `${BASE_PATH}/fun_duck.png`,
  `${BASE_PATH}/fun_strawberry.png`,
  `${BASE_PATH}/fun_unicorn.png`,
  `${BASE_PATH}/fun_computer.png`,
];

interface MouseSticker {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
  scale: number;
  size: number;
  dying: boolean;
}

export const HeroSection = ({ language, heroImageUrl }: HeroSectionProps) => {
  const data = portfolioData.personal;
  const text = uiText[language];

  const sectionRef = useRef<HTMLElement>(null);
  const [stickers, setStickers] = useState<MouseSticker[]>([]);

  const currentMousePosRef = useRef({ x: 0, y: 0 });
  const lastSpawnPosRef = useRef({ x: -999, y: -999 });
  const lastScrollYRef = useRef(0);
  const imgIndexRef = useRef(0);
  const counterRef = useRef(0);

  const spawnSticker = (clientX: number, clientY: number, force: boolean = false) => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const rect = sectionRef.current.getBoundingClientRect();

    // Check if within visible bounds of Hero section
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const dist = Math.hypot(clientX - lastSpawnPosRef.current.x, clientY - lastSpawnPosRef.current.y);
      if (dist > 45 || force) {
        lastSpawnPosRef.current = { x: clientX, y: clientY };
        counterRef.current += 1;
        const newImg = FUN_ONLY_IMAGES[imgIndexRef.current % FUN_ONLY_IMAGES.length];
        imgIndexRef.current += 1;

        const relativeX = Math.max(40, Math.min(rect.width - 40, clientX - rect.left));
        const relativeY = Math.max(40, Math.min(rect.height - 40, clientY - rect.top));
        const rotation = (Math.random() - 0.5) * 36;
        const scale = 0.85 + Math.random() * 0.3;
        const size = 120 + Math.floor(Math.random() * 50); // 120–170px

        const id = counterRef.current;
        const newSticker: MouseSticker = {
          id,
          x: relativeX,
          y: relativeY,
          image: newImg,
          rotation,
          scale,
          size,
          dying: false,
        };

        setStickers((prev) => [...prev.slice(-8), newSticker]);

        // Start fade out after 600ms
        setTimeout(() => {
          setStickers((prev) =>
            prev.map((s) => (s.id === id ? { ...s, dying: true } : s))
          );
        }, 600);

        // Remove from DOM
        setTimeout(() => {
          setStickers((prev) => prev.filter((s) => s.id !== id));
        }, 1050);
      }
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    currentMousePosRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    lastScrollYRef.current = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      currentMousePosRef.current = { x: e.clientX, y: e.clientY };
      spawnSticker(e.clientX, e.clientY);
    };

    // Active scroll detection: spawn images continuously as page scrolls
    const handleScroll = () => {
      const scrollDiff = Math.abs(window.scrollY - lastScrollYRef.current);
      if (scrollDiff > 8) {
        lastScrollYRef.current = window.scrollY;
        spawnSticker(currentMousePosRef.current.x, currentMousePosRef.current.y, true);
      }
    };

    // Wheel event detection for instant responsiveness on scroll wheel
    const handleWheel = () => {
      spawnSticker(currentMousePosRef.current.x, currentMousePosRef.current.y, true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-24 select-none">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat print:hidden pointer-events-none"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-background/78 dark:bg-background/86" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      {/* Hero-ONLY Pure Floating PNG Images (100% transparent cutout, no card container, no background) */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden print:hidden" aria-hidden="true">
        {stickers.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className="absolute object-contain pointer-events-none filter drop-shadow-2xl"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${item.scale})`,
              opacity: item.dying ? 0 : 1,
              transition: item.dying
                ? "opacity 400ms ease-out, transform 400ms ease-out"
                : "opacity 100ms ease-in",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono-meta text-[10px] text-muted-foreground md:mb-6 md:text-xs">
            [ {data.title[language]} ]
          </p>

          <h1 className="mb-4 text-[2.75rem] font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            {data.name}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:mb-10 md:text-lg">
            {data.subtitle[language]}
          </p>

          <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2.5 print:hidden sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 sm:w-auto"
            >
              <a href="#projetos" data-cursor={text.hero.viewProjects}>
                {text.hero.viewProjects}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-full border-foreground/20 px-8 sm:w-auto"
            >
              <a href="#contacto" data-cursor={text.hero.contact}>
                {text.hero.contact}
              </a>
            </Button>
            <Button
              id="download-cv-button"
              variant="ghost"
              size="lg"
              className="h-11 w-full rounded-full px-6 text-muted-foreground sm:w-auto"
            >
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              {text.hero.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
