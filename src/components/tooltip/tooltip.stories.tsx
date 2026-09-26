import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" />}>Hover me</TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Open: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger render={<Button variant="secondary" />}>Hover me</TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  decorators: [(Story) => <div className="pt-12">{Story()}</div>],
};
