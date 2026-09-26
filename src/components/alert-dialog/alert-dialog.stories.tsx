import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

const meta = {
  title: "Components/AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <AlertDialog defaultOpen={defaultOpen}>
    <AlertDialogTrigger render={<Button variant="danger" />}>Delete account</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Delete account?</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete your account and all associated data. This action cannot be
        undone.
      </AlertDialogDescription>
      <div className="mt-4 flex justify-end gap-2">
        <AlertDialogClose render={<Button variant="ghost" />}>Cancel</AlertDialogClose>
        <AlertDialogClose render={<Button variant="danger" />}>Delete</AlertDialogClose>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);

export const Closed: Story = {
  render: () => <Example />,
};

export const Open: Story = {
  render: () => <Example defaultOpen />,
  decorators: [(Story) => <div className="h-96">{Story()}</div>],
};
