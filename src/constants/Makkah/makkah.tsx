import { Landmark, MapPin, ScrollText } from "lucide-react";

export const tiles = [
  {
    title: "Ihram",
    subtitle: "الإحرام",
    href: "/makkah/ihram",
    colors: ["#FFF6DE", "#FCE9B4"],
    icon: (
      <ScrollText
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Travel/Meeqat",
    subtitle: "السفر/الميقات",
    href: "/makkah/travel-meeqat",
    colors: ["#E9EEF4", "#D8E2EE"],
    icon: (
      <MapPin
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Umrah",
    subtitle: "العمرة",
    href: "/makkah/umrah",
    colors: ["#EAF4F1", "#DCECE7"],
    icon: (
      <Landmark
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
] as const;
