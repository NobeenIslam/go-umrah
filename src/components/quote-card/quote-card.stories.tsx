import type { Meta, StoryObj } from "@storybook/react";
import { QuoteCard } from "@/components/quote-card/quote-card";

const meta: Meta<typeof QuoteCard> = {
  title: "Components/QuoteCard",
  component: QuoteCard,
  args: {
    step: 1,
    heading: "Intentions for Umrah",
    quoteHeading: "Recommended Dua",
    quotes: ["Labbaik Allahumma Umrah", "Allahumma yassir lana umrana"],
    variant: "success",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["success", "info", "neutral"],
    },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof QuoteCard>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};
