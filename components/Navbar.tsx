"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import ButtonPrimary from "@/components/ui/custom/button-primary";
import ButtonSecondary from "@/components/ui/custom/button-secondary";
import {
  containerClasses,
  navContainerClasses,
  scrollStateClasses,
} from "./Navbar.styles";
import { navLinks } from "./Navbar.constants";
import NavLink from "@/components/ui/custom/nav-link";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className={cn(containerClasses(), scrollStateClasses(isScrolled))}>
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
        <nav className={navContainerClasses}>
          {navLinks.map(({ href, title }) => (
            <NavLink
              key={title}
              href={href}
              pathname={pathname}
              title={title}
            />
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
