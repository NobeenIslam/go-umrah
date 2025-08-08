import type { FC } from "react";
import faq from "@/assets/faq.jpeg";
import { ImageCard } from "@/components/image-card";

export const Faqs: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">FAQs</h2>
      <ImageCard src={faq} alt="FAQs" ratio={16 / 9} />
      <p className="text-sm text-muted-foreground">Content coming soon.</p>
    </div>
  );
};
