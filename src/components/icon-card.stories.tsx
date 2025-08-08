import type { Meta, StoryObj } from "@storybook/react";
import { IconCard } from "@/components/icon-card";
import { Sun, MapPin } from "lucide-react";

const meta: Meta<typeof IconCard> = {
  title: "Components/IconCard",
  component: IconCard,
  args: {
    title: "Miqat Location",
    description: "Nearest miqat and guidance",
    icon: MapPin,
    variant: "brand",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "amber", "sky", "emerald", "violet"],
    },
    icon: {
      control: false,
    },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof IconCard>;

export const Default: Story = {};

export const WithSunIcon: Story = {
  args: {
    icon: Sun,
  },
};
