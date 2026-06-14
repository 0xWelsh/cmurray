"use client";

import { useRef } from "react";
import Image from "next/image";

const brands = [
  { name: "Moleskine", logo: "/images/eyewear_logo/moleskine-vector-logo-e1585780442341.webp" },
  { name: "Guess", logo: "/images/eyewear_logo/guess.webp" },
  { name: "Jasper Conran", logo: "/images/eyewear_logo/jasper_conran.webp" },
  { name: "ProDesign", logo: "/images/eyewear_logo/prodesign.webp" },
  { name: "Charles Stone", logo: "/images/eyewear_logo/charles_stone.webp" },
  { name: "Woow", logo: "/images/eyewear_logo/woow.webp" },
];

export function BrandLogosScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.style.cursor = "grabbing";
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="overflow-x-auto cursor-grab select-none"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      <div className="flex gap-8 w-max px-2">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="p-6 bg-white rounded-xl border border-border flex items-center justify-center min-h-[140px] min-w-[220px]"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={200}
              height={100}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
