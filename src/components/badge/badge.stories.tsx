import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "Badge",
    variant: "neutral",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "info", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};
