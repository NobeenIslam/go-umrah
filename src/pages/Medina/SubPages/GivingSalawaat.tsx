import type { FC } from "react";
import salawaat from "@/assets/salawaat.jpeg";
import { ImageCard } from "@/components/image-card";
import { QuoteCard } from "@/components/quote-card";
import { givingSalawaatSections } from "@/constants/Medina/medina";

export const GivingSalawaat: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Giving Salawaat</h2>
      <ImageCard src={salawaat} alt="Giving Salawaat" ratio={16 / 9} />
      <div className="space-y-4">
        {givingSalawaatSections.map((section, index) => (
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
