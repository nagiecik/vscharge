import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonPrimaryProps {
  text: string;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, className }) => {
  return (
    <Button
      className={cn(
        // Typography
        "font-bold text-base text-white tracking-wide",
        // Dimensions
        "px-8 py-8 w-fit",
        // Visual
        "rounded-full bg-foreground hover:bg-foreground/75",
        // Cursor & Interaction
        "cursor-default lg:cursor-pointer",
        "pointer-events-none lg:pointer-events-auto",
        // Animation
        "duration-600 [transition-timing-function:var(--bezier-custom)]",
        className, // Allow className override
      )}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
