"use client";
import BadgePrimary from "@/components/ui/custom/badge-primary";
import { cn } from "@/lib/utils";
import CardStatistics from "@/components/ui/custom/card-statistics";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ButtonScroll from "@/components/ui/custom/button-scroll";
import { ArrowRight } from "lucide-react";

// Constants for class combinations
const sectionContainerClasses = cn(
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

const mainContentClasses = cn(
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

const leftColumnContainerClasses = cn(
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

const textContainerClasses = cn(
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

const headingSpanClasses = cn(
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

const paragraphClasses = cn(
  // Typography
  "text-lg",
  "lg:text-xl",
  "text-foreground",
  "leading-[1.8]",
  "font-light",
  "max-w-[75%]",
);

const statisticsContainerClasses = cn(
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

const socialMediaContainerClasses = cn(
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

const socialButtonClasses = cn(
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

const getStartedButtonClasses = cn(
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

interface Statistic {
  value: string;
  label: string;
}

const socialMedia = [
  {
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: "/icons/x.svg",
    href: "https://x.com",
    label: "X",
  },
  {
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

const statistics: Statistic[] = [
  {
    value: "50k+",
    label: "Active Users",
  },
  {
    value: "100+",
    label: "Charging Stations",
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={sectionContainerClasses}>
      <div className={mainContentClasses}>
        <div
          className={cn(
            leftColumnContainerClasses,
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0",
          )}
        >
          <div className={textContainerClasses}>
            <BadgePrimary text="Smart EV Charging, Unified"></BadgePrimary>
            <h1
              className={cn(
                "text-4xl",
                "lg:text-7xl",
                "font-medium",
                "leading-[1.2]",
                "text-foreground",
                "w-[90%]",
                "tracking-tighter",
              )}
            >
              One platform to manage EV charging{" "}
              <span className={headingSpanClasses}>On the Go</span>
            </h1>
            <p className={paragraphClasses}>
              vsCharge connects drivers, contractors, and energy providers in
              one seamless ecosystem. Control, monitor, and optimize every
              charging session — from personal garages to public networks.
            </p>
          </div>
          {/*<ButtonPrimary text="Get started" />*/}
          <Button size="xl" className={getStartedButtonClasses}>
            <p className="font-bold text-base tracking-wide text-white">
              Get started
            </p>
            <span className="rounded-full w-14 h-14 bg-white pointer-events-none flex items-center justify-center">
              <ArrowRight className="text-foreground !w-6 !h-6 transition-transform duration-600 group-hover:-rotate-45" />
            </span>
          </Button>
        </div>
        <div className={statisticsContainerClasses}>
          {statistics.map((stat) => (
            <CardStatistics key={stat.label} stat={stat} />
          ))}
        </div>
        <div className={socialMediaContainerClasses}>
          {socialMedia.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="secondary"
              className={socialButtonClasses}
            >
              <a
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className=""
                />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <ButtonScroll scrollOffset={-100} duration={1200} text={"Learn more"} />
    </section>
  );
};

export default Hero;
