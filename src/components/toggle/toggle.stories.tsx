import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle, ToggleGroup } from "./toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle aria-label="Bold">B</Toggle>,
};

export const Pressed: Story = {
  render: () => (
    <Toggle aria-label="Bold" defaultPressed>
      B
    </Toggle>
  ),
};

export const Group: Story = {
  render: () => (
    <ToggleGroup defaultValue={["bold"]}>
      <Toggle aria-label="Bold" value="bold" className="font-bold">
        B
      </Toggle>
      <Toggle aria-label="Italic" value="italic" className="italic">
        I
      </Toggle>
      <Toggle aria-label="Underline" value="underline" className="underline">
        U
      </Toggle>
    </ToggleGroup>
  ),
};
