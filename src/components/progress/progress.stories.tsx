import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  args: {
    value: 40,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
  args: { value: 100 },
};

export const Empty: Story = {
  args: { value: 0 },
};
