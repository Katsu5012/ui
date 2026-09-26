import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    items: fruits,
    placeholder: "Select a fruit...",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "banana" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Open: Story = {
  args: { defaultValue: "apple", defaultOpen: true },
  decorators: [(Story) => <div className="pb-40">{Story()}</div>],
};
