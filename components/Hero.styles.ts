import { cn } from "@/lib/utils";

export const sectionContainerClasses = cn(
  // Layout
  "flex",
  "lg:min-h-[86vh] min-h-screen",
  "relative",
  // Spacing
  "lg:px-28 md:px-16 px-6",
  "lg:pt-24 pt-14",
  "lg:m-8 lg:mt-32 m-4 mt-28",
  // Background
  "bg-foreground",
  "bg-[url('/images/hero-2.jpg')]",
  "bg-cover",
  "bg-center",
  "bg-no-repeat",
  // Visual
  "rounded-4xl",
  "overflow-hidden",
  "inverted-radius",
);

export const mainContainerClasses = cn(
  // Layout
  "flex",
  "flex-col",
  "lg:flex-row",
  "relative",
  // Spacing
  "gap-20",
  // Dimensions
  "w-full",
  // Positioning
  "justify-between",
);

export const leftContainerClasses = cn(
  // Layout
  "flex",
  "flex-col",
  // Spacing
  "gap-12",
  // Dimensions
  "w-full",
  "lg:w-1/2",
  // Alignment
  "lg:items-start",
  "items-center",
  // Animation
  "transition-all",
  "duration-1000",
  "ease-in-out",
  "transform",
);

export const statisticsContainerClasses = cn(
  // Layout
  "flex",
  "flex-col",
  // Spacing
  "gap-6",
  "lg:pb-16 pb-20",
  // Dimensions
  "w-full",
  "lg:w-1/3",
  // Alignment
  "justify-end",
);

export const socialContainerClasses = cn(
  // Layout
  "flex",
  "flex-wrap",
  // Dimensions
  "lg:w-fit",
  "w-full",
  // Positioning
  "lg:absolute",
  "relative",
  "lg:bottom-16 bottom-20",
  "left-0",
  // Alignment
  "lg:items-start",
  "items-center",
  "lg:justify-start",
  "justify-center",
  // Spacing
  "gap-4",
);

export const socialButtonContainerClasses = cn(
  // Layout
  "flex",
  // Dimensions
  "w-14",
  "h-14",
  // Alignment
  "items-center",
  "justify-center",
  // Visual
  "rounded-full",
  "!bg-foreground/15",
  "backdrop-blur-sm",
  // Cursor & Interaction
  "cursor-pointer",
  "hover:!bg-foreground/20",
  // Animation
  "duration-600",
  "[transition-timing-function:var(--bezier-custom)]",
);
