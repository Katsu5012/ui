import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "./slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  args: {
    defaultValue: 40,
    disabled: false,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Range: Story = {
  args: { defaultValue: [20, 70] },
};
