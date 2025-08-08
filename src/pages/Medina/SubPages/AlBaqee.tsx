import type { FC } from "react";
import baqi from "@/assets/baqi.jpeg";
import { ImageCard } from "@/components/image-card";
import { QuoteCard } from "@/components/quote-card";
import { alBaqeeSections } from "@/constants/Medina/medina";

export const AlBaqee: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Al-Baqee Cemetery</h2>
      <ImageCard src={baqi} alt="Al-Baqee Cemetery" ratio={16 / 9} />
      <div className="space-y-4">
        {alBaqeeSections.map((section, index) => (
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
