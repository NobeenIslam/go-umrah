import type { FC } from "react";
import { Link } from "react-router-dom";
import { GradientCard } from "@/components/graident-card";
import { tiles } from "@/constants/Medina/medina";

export const Medina: FC = () => {
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
