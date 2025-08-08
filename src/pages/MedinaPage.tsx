import type { FC } from "react";
import { Link } from "react-router-dom";
import { GradientCard } from "@/components/graident-card";
import { Building, HeartHandshake, Landmark, MapPin } from "lucide-react";

const tiles = [
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

export const MedinaPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            to={tile.href}
            aria-label={tile.title}
            className="block h-full"
          >
            <GradientCard
              title={tile.title}
              subtitle={tile.subtitle}
              colors={tile.colors}
              icon={tile.icon}
            />
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        <Link
          to="/medina/recommended-acts"
          className="block"
          aria-label="Recommended Acts of Worship (Medina)"
        >
          <GradientCard
            title="Recommended Acts of Worship"
            subtitle="Ziyaarah (Medina)"
            className="aspect-[6/1]"
            showIcon={false}
            density="compact"
            colors={["#FFF6DE", "#FCE9B4"]}
          />
        </Link>

        <Link
          to="/medina/medina-ziyarah"
          className="block"
          aria-label="Medina Ziyaarah"
        >
          <GradientCard
            title="Medina Ziyaarah"
            subtitle="Sites and etiquettes"
            className="aspect-[6/1]"
            showIcon={false}
            density="compact"
            colors={["#E9EEF4", "#D8E2EE"]}
          />
        </Link>
      </div>
    </div>
  );
};
