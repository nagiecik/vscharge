"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import ButtonPrimary from "@/components/ui/custom/button-primary";
import ButtonSecondary from "@/components/ui/custom/button-secondary";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Application", href: "/application" },
  { title: "CMS", href: "/cms" },
  { title: "For Whom", href: "/for-whom" },
  { title: "Solutions", href: "/solutions" },
] as const;

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const containerClasses = cn(
    "grid grid-cols-4 items-center",
    "justify-between",
    "lg:px-20 px-8 pr-4",
    "mt-4",
    "gap-4",
    "fixed",
    "top-0",
    "left-1/2",
    "-translate-x-1/2",
    "z-[9999]",
    "lg:w-[calc(100%-8rem)] w-[calc(100%-4rem)]",
    "transition-all",
    "duration-600",
    "ease-in-out",
    "rounded-full",
  );

  const scrollStateClasses = cn(
    isScrolled
      ? "bg-background border-1 border-foreground/20 lg:py-6 py-4"
      : "bg-transparent border-1 border-transparent lg:py-4 py-4",
  );

  const navLinkClasses = (href: string) =>
    cn(
      "text-base",
      "font-medium",
      "transition-all",
      "duration-600",
      "[transition-timing-function:var(--bezier-custom)]",
      pathname === href ? "text-foreground" : "text-foreground/40",
      "hover:text-foreground",
    );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className={cn(containerClasses, scrollStateClasses)}>
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

        <nav className="hidden lg:flex col-span-2 justify-evenly gap-6 w-full">
          {navLinks.map(({ href, title }) => (
            <a key={href} href={href} className={navLinkClasses(href)}>
              {title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex col-span-1 justify-end gap-4">
          <ButtonSecondary text="Sign in" />
          <ButtonPrimary text="Contact us" />
        </div>

        <button className="lg:hidden text-white p-2" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
