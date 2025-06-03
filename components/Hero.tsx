"use client";
import { cn } from "@/lib/utils";
import CardStatistics from "@/components/ui/custom/card-statistics";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ButtonScroll from "@/components/ui/custom/button-scroll";
import {
  leftContainerClasses,
  mainContainerClasses,
  sectionContainerClasses,
  socialButtonContainerClasses,
  socialContainerClasses,
  statisticsContainerClasses,
} from "./Hero.styles";

import { contentMain, socialMedia, statistics } from "./Hero.constants";
import ButtonCta from "@/components/ui/custom/button-cta";
import ContentMain from "@/components/ui/custom/content-main";

const Hero = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={sectionContainerClasses}>
      <div className={mainContainerClasses}>
        <div
          className={cn(
            leftContainerClasses,
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0",
          )}
        >
          <ContentMain
            badgeText={contentMain[0].badgeText}
            headerText={contentMain[0].headerText}
            spanHeaderText={contentMain[0].spanHeaderText}
            paragraphText={contentMain[0].paragraphText}
          ></ContentMain>

          <ButtonCta text={"Get started"} href={"/"} />
        </div>
        <div className={statisticsContainerClasses}>
          {statistics.map((stat) => (
            <CardStatistics key={stat.label} stat={stat} />
          ))}
        </div>
        <div className={socialContainerClasses}>
          {socialMedia.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="secondary"
              className={socialButtonContainerClasses}
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
