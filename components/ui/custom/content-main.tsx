import React from "react";
import BadgePrimary from "@/components/ui/custom/badge-primary";
import {
  contentContainerClasses,
  headerClasses,
  paragraphClasses,
  spanHeaderClasses,
} from "./content-main.styles";

interface ContentMainProps {
  showBadge?: boolean;
  showParagraph?: boolean;
  badgeText?: string;
  headerText?: string;
  spanHeaderText?: string;
  paragraphText?: string;
}

const ContentMain = ({
  showBadge = true,
  showParagraph = true,
  badgeText = "Badge Text",
  headerText = "Header Text",
  spanHeaderText = "Span Header Text",
  paragraphText = "Paragraph Text",
}: ContentMainProps) => {
  return (
    <div className={contentContainerClasses}>
      {showBadge && <BadgePrimary text={badgeText}></BadgePrimary>}
      <h1 className={headerClasses}>
        {headerText}
        <span className={spanHeaderClasses}>{spanHeaderText}</span>
      </h1>
      {showParagraph && <p className={paragraphClasses}>{paragraphText}</p>}
    </div>
  );
};
export default ContentMain;
