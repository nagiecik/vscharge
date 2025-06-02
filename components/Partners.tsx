import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BadgePrimary from "@/components/ui/custom/badge-primary";
import HeaderH2 from "@/components/ui/custom/header-h2";

// Define partners data
const partners = [
  { name: "Partner 1", logo: "/logo.svg" },
  { name: "Partner 2", logo: "/logo.svg" },
  { name: "Partner 3", logo: "/logo.svg" },
  { name: "Partner 4", logo: "/logo.svg" },
  { name: "Partner 5", logo: "/logo.svg" },
  { name: "Partner 6", logo: "/logo.svg" },
];

const sectionContainerClasses = cn(
  // Layout
  "flex",
  "flex-col",
  "lg:gap-16 gap-12",
  "w-full",
  "overflow-hidden",
  "items-center",
  "justify-center",
  // Spacing
  "lg:py-20 py-12",
);

const logotypesContainerClasses = cn(
  // Layout
  "lg:flex grid grid-flow-col grid-rows-3",
  "items-center",
  "justify-center",
  // Spacing
  "gap-16",
  "lg:gap-24",
);

const logotypeContainerClasses = cn(
  // Dimensions
  "w-[120px]",
  "lg:w-[180px]",
  // Visual
  "lg:opacity-50 opacity-100",
  "grayscale",
  // Animation
  "transition-all",
  "duration-600 [transition-timing-function:var(--bezier-custom)]",
  // Cursor & Interaction
  "hover:opacity-100",
  "hover:grayscale-0",
  "cursor-default lg:cursor-pointer",
  "pointer-events-none lg:pointer-events-auto",
  "flex-shrink-0", // Prevent logos from shrinking
);

const logotypeClasses = cn(
  // Dimensions
  "h-auto",
  "w-full",
  // Object Fit
  "object-contain",
  "object-center",
);

const Partners = () => {
  return (
    <section className={sectionContainerClasses}>
      <BadgePrimary text={"Testimonials"} />
      <HeaderH2 text={"Trusted by the best"} />
      <div className="relative w-full overflow-hidden">
        <div className={logotypesContainerClasses}>
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={logotypeContainerClasses}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className={logotypeClasses}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
