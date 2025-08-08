import type { FC } from "react";
import { Link } from "react-router-dom";
import { GradientCard } from "@/components/graident-card";
import { tiles } from "@/constants/Learn/learn";

export const Learn: FC = () => {
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
              colors={tile.colors}
              icon={tile.icon}
            />
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        <Link
          to="/learn/useful-in-saudi-arabia"
          className="block"
          aria-label="Useful in Saudi Arabia"
        >
          <GradientCard
            title="Useful in Saudi Arabia"
            className="aspect-[6/1]"
            showIcon={false}
            density="compact"
            colors={["#E6F0FF", "#D6E4FF"]}
          />
        </Link>
      </div>
    </div>
  );
};
