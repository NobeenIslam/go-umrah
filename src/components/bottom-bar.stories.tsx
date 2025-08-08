import type { Meta, StoryObj } from "@storybook/react";
import BottomBar from "@/components/bottom-bar";
import { Home, ListChecks, MapPinned, Heart, Settings } from "lucide-react";
import React from "react";

const meta: Meta<typeof BottomBar> = {
  title: "Components/BottomBar",
  component: BottomBar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: [
      { key: "home", label: "Home", icon: Home },
      { key: "checklist", label: "Checklist", icon: ListChecks },
      { key: "map", label: "Map", icon: MapPinned },
      { key: "love", label: "Love", icon: Heart },
      { key: "settings", label: "Settings", icon: Settings },
    ],
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BottomBar>;

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = React.useState<string>("home");
    return (
      <div style={{ paddingBottom: 80 }}>
        <div className="mx-auto max-w-md p-4">
          <p className="mb-3 text-sm text-muted-foreground">
            Active tab: <span className="font-medium">{active}</span>
          </p>
          <div className="h-64 rounded-3xl border bg-muted/30" />
        </div>
        <BottomBar {...args} activeKey={active} onChange={setActive} />
      </div>
    );
  },
};
