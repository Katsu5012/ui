import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/input";
import { Field, FieldDescription, FieldError, FieldLabel } from "./field";

const meta = {
  title: "Components/Field",
  component: Field,
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field name="email">
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="you@example.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Field name="email" invalid>
      <FieldLabel>Email</FieldLabel>
      <Input defaultValue="not-an-email" aria-invalid />
      <FieldError match>Enter a valid email address.</FieldError>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field name="email" disabled>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="you@example.com" />
    </Field>
  ),
};
