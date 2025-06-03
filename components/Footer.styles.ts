import { cn } from "@/lib/utils";

export const sectionContainerClasses = cn(
  // Layout
  "flex flex-col",
  "gap-16",
  "relative",
  // Spacing
  "lg:px-28 md:px-16 px-6",
  "lg:pt-24 pt-14 pb-8",
  "lg:m-8 m-4",
  // Background
  "bg-secondary",
  // Visual
  "rounded-4xl",
);

export const textContainerClasses = cn(
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

export const headerContainerClasses = cn(
  // Layout
  "w-fit",
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

export const headerClasses = cn(
  // Layout
  "flex flex-col",
  // Typography
  "text-4xl",
  "lg:text-6xl",
  "font-medium",
  "leading-[1.2]",
  "text-foreground",
  "w-1/2",
  "tracking-tighter",
);
