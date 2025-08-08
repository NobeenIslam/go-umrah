import type { Meta, StoryObj } from "@storybook/react";
import { GradientCard } from "@/components/graident-card/gradient-card";

const meta: Meta<typeof GradientCard> = {
  title: "Components/GradientCard",
  component: GradientCard,
  args: {
    title: "Ihram Guidance",
    subtitle: "Tips to prepare for Ihram",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof GradientCard>;

export const Default: Story = {
  args: {
    colors: ["var(--brand-soft-mint-a)", "var(--brand-soft-blue-a)"],
  },
};

export const CustomColors: Story = {
  args: {
    colors: ["#fde68a", "#60a5fa"],
  },
};
