"use client";

import { useEffect, useRef } from "react";

interface LiquidGradientProps {
  className?: string;
  colors?: string[];
}

export default function LiquidGradient({
  className = "",
  colors = ["rgba(236,72,153,0.4)", "rgba(244,114,182,0.3)", "rgba(168,85,247,0.35)", "rgba(251,113,133,0.3)"],
}: LiquidGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 0.5; // Lower res for performance
      canvas.height = canvas.offsetHeight * 0.5;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = colors.map((color, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 0.25 + Math.random() * 0.2,
      color,
      phase: (i * Math.PI * 2) / colors.length,
    }));

    const animate = () => {
      time += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      blobs.forEach((blob) => {
        const x = (Math.sin(time * blob.vx + blob.phase) * 0.3 + 0.5 + blob.x * 0.2) * w;
        const y = (Math.cos(time * blob.vy + blob.phase) * 0.3 + 0.5 + blob.y * 0.2) * h;
        const r = blob.radius * Math.min(w, h);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ filter: "blur(60px)", opacity: 0.7 }}
    />
  );
}
