"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const containerClasses = cn(
  // Layout & Positioning
  "relative",
  // Animation & Interaction
  "duration-600",
  "cursor-pointer",
  "hover:transform",
  "hover:-translate-y-2",
  "[transition-timing-function:var(--bezier-custom)]",
  "group",
  // Visual
  "overflow-hidden",
);

const gradientFollowerClasses = cn(
  // Interaction
  "pointer-events-none",
  // Layout & Positioning
  "absolute",
  "-inset-px",
  "rounded-2xl",
  // Animation
  "transition-all",
  "duration-600",
  "opacity-0",
  "group-hover:opacity-100",
  "inverted-radius",
  "z-[1]",
);

const cardClasses = cn(
  // Layout
  "flex",
  "flex-col",
  "lg:p-12 p-8",
  "rounded-2xl",
  // Visual
  "bg-foreground/10",
  "backdrop-blur-md",
  "relative",
  "border-0",
  "inverted-radius",
  // Hover & Animation
  "hover:bg-foreground/15 hover:backdrop-blur-lg",
  "duration-600",
  "[transition-timing-function:var(--bezier-custom)]",
);

const logoButtonClasses = cn(
  // Background
  "bg-background",
  // Positioning
  "absolute",
  "top-0",
  "right-0",
  // Dimensions
  "lg:w-16 w-13",
  "lg:h-16 h-13",
  // Visual
  "rounded-full",
  "pointer-events-none",
);

const logoClasses = cn(
  // Dimensions
  "!w-6",
  "!h-6",
  // Animation
  "duration-600",
  "group-hover:rotate-45",
  "[transition-timing-function:var(--bezier-custom)]",
);

interface Statistic {
  value: string;
  label: string;
}

const CardStatistics = ({ stat }: { stat: Statistic }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={containerClasses}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        aria-hidden="true"
        className={gradientFollowerClasses}
        style={{
          background: isHovering
            ? `radial-gradient(
              640px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(56, 198, 87, 0.2),
              transparent 40%
            )`
            : "radial-gradient(0px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 198, 87, 0), transparent 0%)",
        }}
      />
      <Card className={cardClasses}>
        <span className="lg:text-7xl text-5xl font-light text-white">
          {stat.value}
        </span>
        <span className="text-white font-light text-xl">{stat.label}</span>
      </Card>
      <Button size="icon" className={logoButtonClasses}>
        <Image
          src="/logo-mark.svg"
          alt="Logo"
          width={24} // adjust size as needed
          height={24} // adjust size as needed
          className={logoClasses}
        />
      </Button>
    </div>
  );
};

export default CardStatistics;
