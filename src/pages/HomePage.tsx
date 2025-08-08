import type { FC } from "react";
import { ZiyarahCard } from "@/components/ziyarah-card";
import { QuoteCard } from "@/components/quote-card";

export const HomePage: FC = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Home</h2>
      <p className="text-sm text-muted-foreground">
        Placeholder screen. Navigation only.
      </p>
      <ZiyarahCard />
      <QuoteCard />
    </div>
  );
};
