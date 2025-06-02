// components/ui/gradient-hover.tsx
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GradientHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassName?: string;
  primaryColor?: string;
  secondaryColor?: string;
  blurSize?: number;
  glowIntensity?: number;
  disabled?: boolean;
}

export const GradientHover = ({
  children,
  containerClassName,
  className,
  primaryColor = "56, 189, 248", // Default blue
  secondaryColor = "74, 222, 128", // Default green
  blurSize = 400,
  glowIntensity = 0.15,
  disabled = false,
  ...props
}: GradientHoverProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || disabled) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        !disabled && "cursor-pointer",
        containerClassName,
      )}
      onMouseEnter={() => !disabled && setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Deep Blur Background Layer */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300",
          isHovering && !disabled && "opacity-100",
        )}
        style={{
          background: isHovering
            ? `
              radial-gradient(
                ${blurSize * 1.5}px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${primaryColor}, ${glowIntensity * 0.3}),
                transparent 70%
              )
            `
            : "",
        }}
      />

      {/* Primary Glow Layer */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300",
          isHovering && !disabled && "opacity-100",
        )}
        style={{
          background: isHovering
            ? `
              radial-gradient(
                ${blurSize}px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${primaryColor}, ${glowIntensity}),
                transparent 40%
              )
            `
            : "",
        }}
      />

      {/* Secondary Glow Layer */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300",
          isHovering && !disabled && "opacity-100",
        )}
        style={{
          background: isHovering
            ? `
              radial-gradient(
                ${blurSize * 0.7}px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${secondaryColor}, ${glowIntensity * 0.8}),
                transparent 35%
              )
            `
            : "",
        }}
      />

      {/* Sharp Focus Layer */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300",
          isHovering && !disabled && "opacity-100",
        )}
        style={{
          background: isHovering
            ? `
              radial-gradient(
                ${blurSize * 0.3}px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${primaryColor}, ${glowIntensity * 1.2}),
                transparent 25%
              )
            `
            : "",
        }}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
