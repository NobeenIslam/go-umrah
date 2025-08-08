import type { Meta, StoryObj } from "@storybook/react";
import { LargerCheckListItem } from "@/components/larger-checklist-item/larger-checklist-item";
import React from "react";

const meta: Meta<typeof LargerCheckListItem> = {
  title: "Components/LargerCheckListItem",
  component: LargerCheckListItem,
  args: {
    title: "Jabal Al-Noor",
    description: "Site of the Cave of Hira",
    statusLabel: "Not visited",
    checked: false,
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LargerCheckListItem>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean>(
      args.checked ?? false
    );
    return (
      <div className="max-w-md">
        <LargerCheckListItem {...args} checked={checked} onCheckedChange={setChecked} />
      </div>
    );
  },
};
