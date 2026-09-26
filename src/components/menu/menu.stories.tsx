import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import { Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuTrigger } from "./menu";

const meta = {
  title: "Components/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <Menu defaultOpen={defaultOpen}>
    <MenuTrigger render={<Button variant="secondary" />}>Options</MenuTrigger>
    <MenuContent>
      <MenuGroup>
        <MenuGroupLabel>Actions</MenuGroupLabel>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuItem disabled>Archive</MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export const Closed: Story = {
  render: () => <Example />,
};

export const Open: Story = {
  render: () => <Example defaultOpen />,
  decorators: [(Story) => <div className="pb-44">{Story()}</div>],
};
