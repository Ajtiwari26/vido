"use client";

import { useEffect, useRef, ReactNode } from "react";

interface StackingCardsProps {
  children: ReactNode[];
}

export default function StackingCards({ children }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef(0);
  const n = children.length;

  const CARD_H = 320;
  const PEEK = 32;
  const SCROLL_GAP = 250;
  const STICKY_TOP = 100;
  const totalHeight = SCROLL_GAP * (n - 1) + CARD_H + 800;

  useEffect(() => {
    const tick = () => {
      const container = containerRef.current;
      if (!container) {
        frameId.current = requestAnimationFrame(tick);
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrolled = Math.max(0, STICKY_TOP - rect.top);

      for (let i = 0; i < n; i++) {
        const el = cardEls.current[i];
        if (!el) continue;

        if (i === 0) {
          el.style.transform = "translate3d(0,0,0)";
          el.style.opacity = "1";
          continue;
        }

        const start = SCROLL_GAP * (i - 1);
        const end = SCROLL_GAP * i;
        const raw = (scrolled - start) / (end - start);
        const t = Math.max(0, Math.min(1, raw));
        const ease = 1 - (1 - t) * (1 - t);

        const y = PEEK * i + (1 - ease) * (CARD_H + 50);

        // translate3d forces GPU compositing — much faster than translateY
        el.style.transform = `translate3d(0,${y}px,0)`;
        el.style.opacity = t > 0.05 ? "1" : "0";
      }

      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [n]);

  return (
    <div
      ref={containerRef}
      style={{ height: totalHeight, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: STICKY_TOP,
          height: CARD_H + PEEK * (n - 1) + 20,
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            ref={(el) => { cardEls.current[i] = el; }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: CARD_H,
              zIndex: i + 1,
              opacity: i === 0 ? 1 : 0,
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
