"use client";

import Image from "next/image";

interface InfiniteScrollProps {
  direction?: "left" | "right";
  speed?: number;
  items: string[];
}

export default function InfiniteScroll({ direction = "left", speed = 20, items }: InfiniteScrollProps) {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* First Half */}
        <div className="flex gap-6 pr-6 w-max">
          {items.map((thumbnail, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-200 hover:border-pink-300"
            >
              <Image
                src={thumbnail}
                alt={`YouTube Thumbnail ${index + 1}`}
                width={360}
                height={202}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Half (Duplicate) */}
        <div className="flex gap-6 pr-6 w-max">
          {items.map((thumbnail, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-200 hover:border-pink-300"
            >
              <Image
                src={thumbnail}
                alt={`YouTube Thumbnail Duplicate ${index + 1}`}
                width={360}
                height={202}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
