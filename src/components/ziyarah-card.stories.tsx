import type { Meta, StoryObj } from "@storybook/react";
import { ZiyarahCard } from "@/components/ziyarah-card";
import React from "react";

const meta: Meta<typeof ZiyarahCard> = {
  title: "Components/ZiyarahCard",
  component: ZiyarahCard,
  args: {
    title: "Jabal Al-Noor",
    description: "Site of the Cave of Hira",
    statusLabel: "Not visited",
    checked: false,
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ZiyarahCard>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean>(
      args.checked ?? false
    );
    return (
      <div className="max-w-md">
        <ZiyarahCard {...args} checked={checked} onCheckedChange={setChecked} />
      </div>
    );
  },
};
