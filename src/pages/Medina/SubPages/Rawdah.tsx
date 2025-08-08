import type { FC } from "react";
import rawdah from "@/assets/rawdah.jpeg";
import { ImageCard } from "@/components/image-card";

export const Rawdah: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Rawdah</h2>
      <ImageCard src={rawdah} alt="Rawdah" ratio={16 / 9} />
      <p className="text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
};
