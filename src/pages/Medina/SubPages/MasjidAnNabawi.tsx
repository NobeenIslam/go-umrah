import type { FC } from "react";
import masjid from "@/assets/masjid-nabawi.jpeg";
import { ImageCard } from "@/components/image-card";
import { QuoteCard } from "@/components/quote-card";
import { masjidAnNabawiSections } from "@/constants/Medina/medina";

export const MasjidAnNabawi: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Masjid Al-Nabawi</h2>
      <ImageCard src={masjid} alt="Masjid Al-Nabawi" ratio={16 / 9} />
      <div className="space-y-4">
        {masjidAnNabawiSections.map((section, index) => (
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
