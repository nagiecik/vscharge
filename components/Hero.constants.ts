export interface Statistic {
  value: string;
  label: string;
}

export interface ContentMain {
  badgeText: string;
  headerText: string;
  spanHeaderText: string;
  paragraphText: string;
}

export const socialMedia = [
  {
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: "/icons/x.svg",
    href: "https://x.com",
    label: "X",
  },
  {
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export const statistics: Statistic[] = [
  {
    value: "50k+",
    label: "Active Users",
  },
  {
    value: "100+",
    label: "Charging Stations",
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
  },
];

export const contentMain: ContentMain[] = [
  {
    badgeText: "Seamless EV Charging experience",
    headerText: "One platform to manage EV charging",
    spanHeaderText: "On the Go",
    paragraphText:
      "vsCharge connects drivers, contractors, and energy providers in one seamless ecosystem. Control," +
      " monitor, and optimize every charging session — from personal garages to public networks.",
  },
];
