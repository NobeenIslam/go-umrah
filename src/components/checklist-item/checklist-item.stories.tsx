import type { Meta, StoryObj } from "@storybook/react";
import { ChecklistItem } from "@/components/checklist-item/checklist-item";
import React from "react";

const meta: Meta<typeof ChecklistItem> = {
  title: "Components/ChecklistItem",
  component: ChecklistItem,
  args: {
    id: "item-1",
    text: "Bring Ihram cloth",
    checked: false,
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ChecklistItem>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean>(
      args.checked ?? false,
    );
    return (
      <div className="max-w-md">
        <ChecklistItem
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
          onDelete={() => alert("Delete clicked")}
        />
      </div>
    );
  },
};
