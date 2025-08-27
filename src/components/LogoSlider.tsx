"use client";

import { useState } from "react";

interface LogoSliderProps {
  logos: {
    src: string;
    alt: string;
  }[];
  speed?: number; // 애니메이션 속도 (초 단위)
}

export default function LogoSlider({ logos, speed = 30 }: LogoSliderProps) {
  const [isPaused, setIsPaused] = useState(false);

  // 로고들을 반복해서 충분한 개수 만들기 (무한 스크롤을 위해)
  const repeatedLogos = Array.from({ length: 3 }, (_, setIndex) =>
    logos.map((logo, index) => ({
      ...logo,
      key: `set-${setIndex}-${index}`,
    }))
  ).flat();

  // 마우스 호버 시 애니메이션 정지/재시작
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex space-x-6 items-center"
        style={{
          width: "max-content",
          animation: `scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={logo.key}
            className="w-24 h-8 flex items-center justify-center flex-shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-6 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
