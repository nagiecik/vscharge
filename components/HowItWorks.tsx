import React from "react";
import BadgePrimary from "@/components/ui/custom/badge-primary";
import { cn } from "@/lib/utils";
import HeaderH2 from "@/components/ui/custom/header-h2";
import CardFeature from "@/components/ui/custom/card-feature";

const sectionContainerClasses = cn(
  "flex",
  "flex-col",
  "lg:gap-16 gap-12",
  "w-full",
  "overflow-hidden",
  "items-center",
  "justify-center",
  "lg:py-20 py-12",
);

const cardFeaturesData = [
  {
    text: "1",
    header: "Header",
    src: "./logo.svg",
    alt: "logo",
    width: 120,
    height: 48,
    colSpan: 3,
  },
  {
    text: "2",
    header: "Header",
    src: "./logo.svg",
    alt: "logo",
    width: 120,
    height: 48,
    colSpan: 2,
  },
  {
    text: "3",
    header: "Header",
    src: "./logo.svg",
    alt: "logo",
    width: 120,
    height: 48,
    colSpan: 2,
  },
  {
    text: "4",
    header: "Header",
    src: "./logo.svg",
    alt: "logo",
    width: 120,
    height: 48,
    colSpan: 3,
  },
];

const HowItWorks = () => {
  return (
    <section className={sectionContainerClasses}>
      <BadgePrimary text={"Main features"} />
      <HeaderH2 text={"All-in-one charging solution"} />
      <div className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-5 gap-6 lg:px-28 px-6">
        {cardFeaturesData.map((feature, index) => (
          <CardFeature
            key={index}
            text={feature.text}
            header={feature.header}
            src={feature.src}
            alt={feature.alt}
            width={feature.width}
            height={feature.height}
            className={cn(
              "col-span-1",
              feature.colSpan === 3 ? "lg:col-span-3" : "lg:col-span-2",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
