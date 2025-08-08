import type { FC } from "react";
import rawdah from "@/assets/rawdah.jpeg";
import { ImageCard } from "@/components/image-card";
import { QuoteCard } from "@/components/quote-card";
import { rawdahSections } from "@/constants/Medina/medina";

export const Rawdah: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Rawdah</h2>
      <ImageCard src={rawdah} alt="Rawdah" ratio={16 / 9} />
      <div className="space-y-4">
        {rawdahSections.map((section, index) => (
          <QuoteCard
            key={section.heading}
            step={index + 1}
            heading={section.heading}
            quoteHeading={section.quoteHeading}
            quotes={section.quotes}
            variant={section.variant as any}
          />
        ))}
      </div>
    </div>
  );
};
