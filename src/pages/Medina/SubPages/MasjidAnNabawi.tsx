import type { FC } from "react";
import masjid from "@/assets/masjid-nabawi.jpeg";
import { ImageCard } from "@/components/image-card";

export const MasjidAnNabawi: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Masjid Al-Nabawi</h2>
      <ImageCard src={masjid} alt="Masjid Al-Nabawi" ratio={16 / 9} />
      <p className="text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
};
