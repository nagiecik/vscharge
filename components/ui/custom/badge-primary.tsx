import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const badgeContainerClasses = cn(
  // Typography
  "text-lg",
  "text-foreground/50",
  "font-medium",
  // Dimensions
  "h-12",
  "px-8",
  "w-fit",
  // Visual
  "rounded-2xl",
  "bg-transparent",
  "backdrop-blur-sm",
  "border",
  "border-foreground/10",
);

interface BadgePrimaryProps {
  text: string;
}

const BadgePrimary: React.FC<BadgePrimaryProps> = ({ text }) => {
  return <Badge className={badgeContainerClasses}>{text}</Badge>;
};
export default BadgePrimary;
