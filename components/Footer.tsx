import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sectionContainerClasses = cn(
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

const headerClasses = cn(
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

const Footer = () => {
  return (
    <section className={sectionContainerClasses}>
      <div className={textContainerClasses}>
        <h2 className={headerClasses}>
          Charge your business
          <br /> now with creative
          <span className={headingSpanClasses}>solutions</span>
        </h2>
      </div>
      <div className="w-full h-[1px] bg-foreground/20"></div>
      <div className="flex">
        <div className="flex flex-col gap-8 w-[60%]">
          <div className="flex col-span-1">
            <Image
              src="./logo.svg"
              alt="logotype"
              width={120}
              height={48}
              className="h-auto w-[120px] lg:w-[180px]"
              priority
            />
          </div>
          <div>
            <ul>
              <li>20619 Torrence Chapel Rd</li>
              <li>Suite 116 #1040</li>
              <li>Cornelius, NC 28031</li>
              <li>United States</li>
            </ul>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-1">
              <span>Phone number</span>1-800-201-1019
            </div>
            <div className="flex flex-col gap-1">
              <span>Email</span>support@vscharge.com
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-[40%]">
          <div className="flex flex-col gap-4">
            Quick links
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Resources</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            Quick links
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Resources</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            Quick links
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Resources</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-14">
        @ 2025 vsCharge. All rights reserved.
      </div>
    </section>
  );
};
export default Footer;
