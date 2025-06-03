import { cn } from "@/lib/utils";

export const containerClasses = () =>
  cn(
    // Layout
    "grid",
    "grid-cols-4",
    // Alignment
    "items-center",
    "justify-between",
    // Spacing
    "lg:px-20 px-8 pr-4",
    "mt-4",
    "gap-4",
    // Positioning
    "fixed",
    "top-0",
    "left-1/2",
    "-translate-x-1/2",
    "z-[9999]",
    // Dimensions
    "lg:w-[calc(100%-8rem)]",
    "w-[calc(100%-4rem)]",
    // Animation
    "transition-all",
    "duration-600",
    "ease-in-out",
    // Visual
    "rounded-full",
  );

export const scrollStateClasses = (isScrolled: boolean) =>
  cn(
    // Visual
    isScrolled
      ? "bg-background border-1 border-foreground/20 lg:py-6 py-4"
      : "bg-transparent border-1 border-transparent lg:py-4 py-4",
  );

export const navContainerClasses = cn(
  // Layout
  "hidden lg:flex",
  "col-span-2",
  // Alignment
  "justify-evenly",
  // Spacing
  "gap-6",
  // Dimensions
  "w-full",
);
