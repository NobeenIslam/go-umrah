import type { FC } from "react";
import { IconCard } from "@/components/icon-card";
import { recommendedActsMedinaItems } from "@/constants/Medina/medina";
import { Book, Heart, Landmark, Sparkles, Sun } from "lucide-react";

export const RecommendedActsMedina: FC = () => {
  const variants = ["brand", "amber", "sky", "emerald", "violet"] as const;
  const icons = [Sun, Heart, Landmark, Sparkles, Book];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recommended Acts of Worship</h2>
      <div className="space-y-3">
        {recommendedActsMedinaItems.map((item, index) => (
          <IconCard
            key={item.title}
            title={item.title}
            description={item.description}
            variant={variants[index % variants.length]}
            icon={icons[index % icons.length]}
          />
        ))}
      </div>
    </div>
  );
};
