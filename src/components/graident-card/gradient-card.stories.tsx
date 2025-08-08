import type { Meta, StoryObj } from "@storybook/react";
import { GradientCard } from "@/components/graident-card/gradient-card";
import { Sun } from "lucide-react";

const meta: Meta<typeof GradientCard> = {
  title: "Components/GradientCard",
  component: GradientCard,
  args: {
    title: "Ihram Guidance",
    subtitle: "Tips to prepare for Ihram",
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-md p-4">
        <Story />
      </div>
    ),
  ],
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

export const WithoutIcon: Story = {
  args: {
    colors: ["var(--brand-soft-mint-a)", "var(--brand-soft-blue-a)"],
    showIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    icon: (
      <Sun
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
    showIcon: true,
  },
};
