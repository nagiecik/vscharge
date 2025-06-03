import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonSecondaryProps {
  text: string;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  text,
  className,
}) => {
  return (
    <Button
      variant="outline"
      className={cn(
        // Typography
        "font-bold text-base tracking-wide text-foreground hover:text-foreground/70",
        // Dimensions
        "h-16 px-8 w-fit",
        // Visual
        "rounded-full border-1 !border-accent !bg-transparent hover:!bg-transparent box-border",
        // "text-white",
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

export default ButtonSecondary;
