import type { FC } from "react";
import actsOfWorship from "@/assets/acts-of-worship.jpeg";
import { ImageCard } from "@/components/image-card";

export const RecommendedActsMedina: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Recommended Acts of Worship</h2>
      <ImageCard
        src={actsOfWorship}
        alt="Recommended Acts of Worship"
        ratio={16 / 9}
      />
      <p className="text-sm text-muted-foreground">Medina</p>
    </div>
  );
};
