import type { FC } from "react";
import salawaat from "@/assets/salawaat.jpeg";
import { ImageCard } from "@/components/image-card";

export const GivingSalawaat: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Giving Salawaat</h2>
      <ImageCard src={salawaat} alt="Giving Salawaat" ratio={16 / 9} />
      <p className="text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
};
