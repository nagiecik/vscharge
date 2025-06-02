import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const containerClasses = cn(
  // Layout
  "rounded-lg",
  "flex",
  "flex-col",
  "gap-4",
  // Spacing
  "p-8",
  // Visual
  "bg-white/5",
  "backdrop-blur-sm",
);

interface CardFeatureProps {
  header: string;
  text: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  header,
  text,
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Card className={cn(containerClasses, className)}>
      <h3 className="text-2xl font-bold">{header}</h3>
      <p className="text-xl">{text}</p>
      <Image src={src} alt={alt} width={width} height={height} />
    </Card>
  );
};
export default CardFeature;
