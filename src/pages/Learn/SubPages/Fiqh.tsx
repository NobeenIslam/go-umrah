import type { FC } from "react";
import fiqh from "@/assets/fiqh.jpeg";
import { ImageCard } from "@/components/image-card";

export const Fiqh: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Fiqh</h2>
      <ImageCard src={fiqh} alt="Fiqh" ratio={16 / 9} />
      <p className="text-muted-foreground text-sm">Content coming soon.</p>
    </div>
  );
};
