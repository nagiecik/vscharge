import { cn } from "@/lib/utils";

export const contentContainerClasses = cn(
  // Layout
  "flex",
  "flex-col",
  // Spacing
  "gap-8",
  // Alignment
  "items-center",
  "lg:items-start",
  // Typography
  "text-center",
  "lg:text-left",
);

export const headerClasses = cn(
  // Typography
  "text-4xl",
  "lg:text-7xl",
  "font-medium",
  "leading-[1.2]",
  "tracking-tighter",
  "text-foreground",
  // Dimensions
  "w-[90%]",
);

export const spanHeaderClasses = cn(
  // Typography
  "font-italic-light",
  "text-main",
  "inline-block",
  // Animation
  "animate-underline",
  // Cursor & Interaction
  "cursor-default",
  "lg:cursor-pointer",
  "pointer-events-none",
  "lg:pointer-events-auto",
);

export const paragraphClasses = cn(
  // Typography
  "text-lg",
  "lg:text-xl",
  "text-foreground",
  "leading-[1.8]",
  "font-light",
  "max-w-[75%]",
);
