import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "@/components/top-bar/top-bar";

const meta: Meta<typeof TopBar> = {
  title: "Components/TopBar",
  component: TopBar,
  args: {
    title: "Go Umrah",
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  render: (args) => (
    <div>
      <TopBar
        {...args}
        onLeftClick={() => alert("Menu clicked")}
        onRightClick={() => alert("Settings clicked")}
      />
      <div className="mx-auto max-w-md p-4 pt-24">
        <div className="h-64 rounded-3xl border bg-muted/30" />
      </div>
    </div>
  ),
};
