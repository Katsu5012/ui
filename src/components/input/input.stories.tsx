import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    disabled: false,
  },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "Hello world" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled" },
};

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "Invalid value" },
};
