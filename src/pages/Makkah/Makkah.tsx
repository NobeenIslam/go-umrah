import type { FC } from "react";
import { Link } from "react-router-dom";
import { GradientCard } from "@/components/graident-card";
import { tiles } from "@/constants/Makkah/makkah";

export const Makkah: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-1">
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
    </div>
  );
};
