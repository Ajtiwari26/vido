"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardData {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

interface StackingCardsProps {
  cards: CardData[];
}

export default function StackingCards({ cards }: StackingCardsProps) {
  // We'll use IntersectionObserver to reveal cards as they scroll into view
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully comes into view naturally
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-16 py-10 w-full">
      {cards.map((service, i) => {
        const isReverse = i % 2 !== 0;
        const isVisible = visibleIndexes.has(i);

        return (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            data-index={i}
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-stretch w-full`}>
              
              {/* Text Card - half width */}
              <div
                className={`${service.color} rounded-[2rem] p-6 shadow-xl border border-white/50 w-full md:w-1/2 flex flex-col justify-center transform transition-transform duration-500 hover:scale-[1.02]`}
              >
                  <div 
                    className="text-5xl md:text-6xl font-black opacity-60 mb-2 text-white"
                    style={{ WebkitTextStroke: '1px rgba(26, 10, 46, 0.5)' }}
                  >
                    {service.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3 uppercase tracking-tight whitespace-pre-line text-[#1a0a2e]">
                    {service.title}
                  </h3>
                  <p className="text-[#1a0a2e] text-base font-medium leading-relaxed">{service.description}</p>
              </div>

              {/* Image Element - half width */}
              <div 
                className={`w-full md:w-1/2 flex justify-center items-center p-4 bg-[#f2f2f2] rounded-[2rem] transition-all duration-1000 delay-300 ease-out transform ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full max-w-[350px] object-contain hover:scale-105 transition-transform duration-500 will-change-transform mix-blend-darken"
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
