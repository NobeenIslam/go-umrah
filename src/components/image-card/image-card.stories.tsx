import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard } from "@/components/image-card/image-card";
const imageUrl = "https://picsum.photos/800/800";

const meta: Meta<typeof ImageCard> = {
  title: "Components/ImageCard",
  component: ImageCard,
  args: {
    src: imageUrl,
    alt: "React logo",
    title: "Sample Image",
    description: "This is a sample image from the assets folder.",
    ratio: 16 / 9,
    className: "w-full",
  },
  argTypes: {
    ratio: {
      control: { type: "number" },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, width: "100%", margin: "1rem auto" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;

export type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {};

export const ImageOnly: Story = {
  render: () => <ImageCard src={imageUrl} alt="React logo" ratio={16 / 9} />,
};

export const Square: Story = {
  render: () => <ImageCard src={imageUrl} alt="React logo" ratio={1} />,
};

export const Portrait: Story = {
  render: () => <ImageCard src={imageUrl} alt="React logo" ratio={3 / 4} />,
};

export const ChildrenOnly: Story = {
  render: () => (
    <ImageCard ratio={16 / 9}>
      <div className="bg-muted text-muted-foreground grid h-full w-full place-items-center text-sm">
        Custom content
      </div>
    </ImageCard>
  ),
};
