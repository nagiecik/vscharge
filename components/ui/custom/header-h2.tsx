import React from "react";
import { cn } from "@/lib/utils";

const headerH2Classes = cn(
  "text-4xl",
  "text-center",
  "lg:text-5xl",
  "font-bold",
  "leading-[1.2]",
);

interface HeaderH2Props {
  text: string;
}

const HeaderH2: React.FC<HeaderH2Props> = ({ text }) => {
  return <h2 className={headerH2Classes}>{text}</h2>;
};
export default HeaderH2;
