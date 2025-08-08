import type { QuoteCardVariant } from "@/components/quote-card/quote-card";

export interface QuoteSection {
  heading: string;
  quoteHeading: string;
  quotes: string[];
  variant: QuoteCardVariant;
}

export interface IconListItem {
  title: string;
  description?: string;
}
