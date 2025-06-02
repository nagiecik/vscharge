"use client";
import React from "react";
import { ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonScrollProps {
  duration?: number;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  scrollOffset?: number; // Add this prop for custom offset
  targetSelector?: string; // Add this prop to optionally target specific elements
}

const buttonScrollContainerClasses = cn(
  // Layout
  "w-[360px] h-[56px]",
  // Display
  "hidden lg:flex",
  "items-center justify-center",
  "gap-2",
  // Positioning
  "absolute",
  "-bottom-[1px]",
  "left-1/2",
  "transform",
  "-translate-x-1/2",
  // Spacing
  "px-20 py-4",
  // Border
  "border-0",
  // Background
  "bg-[url('/scroll-background.svg')]",
  "bg-center bg-no-repeat",
  // Typography
  "text-foreground",
  "font-bold",
  "tracking-wide",
  // Interactive
  "hover:text-main",
  "cursor-pointer",
  // Animation
  "duration-600",
  "[transition-timing-function:var(--bezier-custom)]",
  "group",
);

const ButtonScroll = ({
  duration = 1200,
  className,
  text = "Learn More",
  scrollOffset,
  targetSelector = "section",
  children = (
    <>
      <ChevronsDown />
      {text}
    </>
  ),
}: ButtonScrollProps) => {
  const scrollToNextSection = () => {
    const currentSection = document.querySelector(targetSelector);
    if (currentSection && currentSection.nextElementSibling) {
      const nextSection = currentSection.nextElementSibling as HTMLElement;
      let targetPosition = nextSection.offsetTop;

      // Apply custom offset if provided
      if (typeof scrollOffset === "number") {
        targetPosition += scrollOffset;
      }

      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation
        const ease = (t: number) => t * (2 - t);

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <div
      className={cn(buttonScrollContainerClasses, className)}
      onClick={scrollToNextSection}
    >
      {children}
    </div>
  );
};

export default ButtonScroll;
