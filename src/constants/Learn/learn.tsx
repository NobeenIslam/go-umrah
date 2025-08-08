import { Book, Feather, HelpCircle, ScrollText } from "lucide-react";

export const tiles = [
  {
    title: "Quran",
    href: "/learn/quran",
    colors: ["#FFF6DE", "#FDECC8"], // warm sunrise
    icon: (
      <Book
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Sunnah",
    href: "/learn/sunnah",
    colors: ["#EAF4F1", "#DCECE7"], // mint breeze
    icon: (
      <Feather
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Fiqh",
    href: "/learn/fiqh",
    colors: ["#F3E8FF", "#E9D5FF"], // soft lavender
    icon: (
      <ScrollText
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "FAQs",
    href: "/learn/faqs",
    colors: ["#E9EEF4", "#D8E2EE"], // cool mist
    icon: (
      <HelpCircle
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
] as const;
