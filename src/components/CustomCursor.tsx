import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    let raf = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setPos({ x: currentX, y: currentY });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(target?.dataset.cursor ?? "");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference print:hidden"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 180ms ease",
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-white/80 bg-white text-black transition-all duration-300 ${
          label ? "h-20 w-20 px-2" : "h-3 w-3"
        }`}
      >
        {label ? (
          <span className="font-mono-meta text-center text-[10px] font-semibold leading-tight">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
};
