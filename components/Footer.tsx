import React from "react";
import Image from "next/image";
import {
  headerClasses,
  headerContainerClasses,
  sectionContainerClasses,
  textContainerClasses,
} from "./Footer.styles";

const Footer = () => {
  return (
    <section className={sectionContainerClasses}>
      <div className={textContainerClasses}>
        <h2 className={headerClasses}>
          Charge your business
          <br /> now with creative
          <span className={headerContainerClasses}>solutions</span>
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
