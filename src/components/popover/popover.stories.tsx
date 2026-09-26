import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "./popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExamplePopover = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <Popover defaultOpen={defaultOpen}>
    <PopoverTrigger render={<Button variant="secondary" />}>Open popover</PopoverTrigger>
    <PopoverContent>
      <PopoverTitle>Notifications</PopoverTitle>
      <p className="mt-1 text-gray-600">You have 3 unread messages.</p>
    </PopoverContent>
  </Popover>
);

export const Closed: Story = {
  render: () => <ExamplePopover />,
};

export const Open: Story = {
  render: () => <ExamplePopover defaultOpen />,
  decorators: [(Story) => <div className="pb-36">{Story()}</div>],
};
