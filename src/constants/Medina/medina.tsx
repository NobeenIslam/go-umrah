import { Building, HeartHandshake, Landmark, MapPin } from "lucide-react";

export const tiles = [
  {
    title: "Masjid Al-Nabawi",
    subtitle: "المسجد النبوي",
    href: "/medina/masjid-an-nabawi",
    colors: ["#FFF6DE", "#FCE9B4"],
    icon: (
      <Landmark
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Giving Salawaat",
    subtitle: "الصلاة على النبي",
    href: "/medina/giving-salawaat",
    colors: ["#E9EEF4", "#D8E2EE"],
    icon: (
      <HeartHandshake
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Rawdah",
    subtitle: "الروضة الشريفة",
    href: "/medina/rawdah",
    colors: ["#EAF4F1", "#DCECE7"],
    icon: (
      <Building
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Al-Baqee Cemetery",
    subtitle: "البقيع",
    href: "/medina/al-baqee",
    colors: ["#F3E8FF", "#E9D5FF"],
    icon: (
      <MapPin
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
] as const;
