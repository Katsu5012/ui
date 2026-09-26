import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleDialog = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <Dialog defaultOpen={defaultOpen}>
    <DialogTrigger render={<Button variant="secondary" />}>Open dialog</DialogTrigger>
    <DialogContent>
      <DialogTitle>Delete item</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to delete this item?
      </DialogDescription>
      <div className="mt-4 flex justify-end gap-2">
        <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
        <DialogClose render={<Button variant="danger" />}>Delete</DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);

export const Closed: Story = {
  render: () => <ExampleDialog />,
};

export const Open: Story = {
  render: () => <ExampleDialog defaultOpen />,
  decorators: [(Story) => <div className="h-96">{Story()}</div>],
};
