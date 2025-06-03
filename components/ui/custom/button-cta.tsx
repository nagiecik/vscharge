import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

export const buttonContainerClasses = cn(
  // Layout & Spacing
  "py-9",
  "pr-2",
  "flex",
  "gap-8",
  // Visual
  "bg-foreground",
  "hover:bg-foreground",
  "rounded-full",
  // Alignment
  "justify-center",
  "items-center",
  // Interaction
  "cursor-pointer",
  "group",
  // Hover Effects
  "hover:gap-16",
  // Animation
  "duration-600",
  "[transition-timing-function:var(--bezier-custom)]",
);

export const textContainerClasses = cn(
  "font-bold",
  "text-base",
  "tracking-wide",
  "text-white",
);

export const iconContainerClasses = cn(
  // Layout
  "rounded-full",
  "w-14",
  "h-14",
  // Visual
  "bg-white",
  // Interaction
  "pointer-events-none",
  // Alignment
  "flex",
  "items-center",
  "justify-center",
);

export const iconClasses = cn(
  "text-foreground",
  "!w-6",
  "!h-6",
  "transition-transform",
  "duration-600",
  "group-hover:-rotate-45",
);

interface ButtonCtaProps {
  text: string;
  href: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ text, href }) => {
  return (
    <Button asChild size="xl" className={buttonContainerClasses}>
      <a href={href}>
        <p className={textContainerClasses}>{text}</p>
        <span className={iconContainerClasses}>
          <ArrowRight className={iconClasses} />
        </span>
      </a>
    </Button>
  );
};

export default ButtonCta;
