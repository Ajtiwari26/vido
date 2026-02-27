"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface StackingCardsProps {
  children: ReactNode[];
  cardHeight?: number;
  overlapPercent?: number;
}

export default function StackingCards({
  children,
  cardHeight = 320,
  overlapPercent = 90,
}: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const cardCount = children.length;

  // Scroll distance per card — keep it tight so no blank gaps
  const scrollPerCard = 100;
  const totalScrollHeight = scrollPerCard * (cardCount - 1) + cardHeight + 200;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // How far the container top has scrolled above viewport top
      const scrolled = -rect.top;
      const maxScroll = totalScrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / Math.max(maxScroll, 1)));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalScrollHeight, mounted]);

  const getCardProgress = (index: number) => {
    if (index === 0) return 1;
    // Each card gets an equal slice of the total scroll progress
    const sliceSize = 1 / (cardCount - 1);
    const cardStart = (index - 1) * sliceSize;
    const cardEnd = index * sliceSize;
    const progress = (scrollProgress - cardStart) / (cardEnd - cardStart);
    return Math.max(0, Math.min(1, progress));
  };

  const overlapAmount = (cardHeight * overlapPercent) / 100;
  const visiblePortion = cardHeight - overlapAmount;

  return (
    <div
      ref={containerRef}
      style={{
        height: mounted ? `${totalScrollHeight}px` : `${cardHeight + 100}px`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "100px",
          height: `${cardHeight + 20}px`,
        }}
      >
        {children.map((child, index) => {
          const progress = getCardProgress(index);

          // First card always at 0. Others: slide from below to their stacked position.
          const stackedY = visiblePortion * index;
          const translateY = index === 0
            ? 0
            : stackedY + (1 - progress) * (cardHeight + 60);

          const opacity = index === 0 ? 1 : Math.max(0, Math.min(1, progress * 2));

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: `${cardHeight}px`,
                zIndex: index + 1,
                transform: `translateY(${translateY}px)`,
                opacity,
                transition: "transform 0.12s ease-out, opacity 0.15s ease-out",
                willChange: "transform, opacity",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
