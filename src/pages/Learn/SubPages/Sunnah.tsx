import type { FC } from "react";
import sunnah from "@/assets/sunnah.jpeg";
import { ImageCard } from "@/components/image-card";

export const Sunnah: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Sunnah</h2>
      <ImageCard src={sunnah} alt="Sunnah" ratio={16 / 9} />
      <p className="text-muted-foreground text-sm">Content coming soon.</p>
    </div>
  );
};
