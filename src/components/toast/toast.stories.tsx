import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { Button } from "@/components/button";
import { ToastProvider, useToast } from "./toast";

const meta = {
  title: "Components/Toast",
  component: ToastProvider,
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

function AddToastButton() {
  const toast = useToast();
  return (
    <Button
      variant="secondary"
      onClick={() => toast.add({ title: "Saved", description: "Your changes have been saved." })}
    >
      Show toast
    </Button>
  );
}

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <AddToastButton />
    </ToastProvider>
  ),
};

function OpenOnMount() {
  const toast = useToast();
  useEffect(() => {
    toast.add({
      title: "Saved",
      description: "Your changes have been saved.",
      timeout: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AddToastButton />;
}

export const Open: Story = {
  render: () => (
    <ToastProvider>
      <OpenOnMount />
    </ToastProvider>
  ),
  decorators: [(Story) => <div className="h-64">{Story()}</div>],
};
