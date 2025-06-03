import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  pathname: string;
  title: string;
  className?: string;
}

const NavLink = ({ href, pathname, title, className }: NavLinkProps) => {
  const navLinkClasses = cn(
    // Typography
    "text-base",
    "font-medium",
    // Animation
    "transition-all",
    "duration-600",
    "[transition-timing-function:var(--bezier-custom)]",
    // Visual
    pathname === href ? "text-foreground" : "text-foreground/40",
    "hover:text-foreground",
    className
  );

  return (
    <Link href={href} className={navLinkClasses}>
      {title}
    </Link>
  );
};

export default NavLink;