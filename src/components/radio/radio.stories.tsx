import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, RadioGroup } from "./radio";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="medium">
      {(["small", "medium", "large"] as const).map((size) => (
        <label key={size} className="flex items-center gap-2 text-sm text-gray-900 capitalize">
          <Radio value={size} />
          {size}
        </label>
      ))}
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="small" disabled>
      {(["small", "medium"] as const).map((size) => (
        <label key={size} className="flex items-center gap-2 text-sm text-gray-900 capitalize">
          <Radio value={size} />
          {size}
        </label>
      ))}
    </RadioGroup>
  ),
};
