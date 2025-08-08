import type { FC } from "react";
import baqi from "@/assets/baqi.jpeg";
import { ImageCard } from "@/components/image-card";

export const AlBaqee: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Al-Baqee Cemetery</h2>
      <ImageCard src={baqi} alt="Al-Baqee Cemetery" ratio={16 / 9} />
      <p className="text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
};
