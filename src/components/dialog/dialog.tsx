import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface DialogProps extends BaseDialog.Root.Props {}

export function Dialog(props: DialogProps) {
  return <BaseDialog.Root {...props} />;
}

export interface DialogTriggerProps extends BaseDialog.Trigger.Props {}

export function DialogTrigger(props: DialogTriggerProps) {
  return <BaseDialog.Trigger {...props} />;
}

export interface DialogContentProps extends BaseDialog.Popup.Props {
  children?: ReactNode;
}

export function DialogContent({ className, children, ...props }: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 bg-black/40" />
      <BaseDialog.Popup
        className={cx(
          "fixed inset-x-4 top-1/2 mx-auto w-96 max-w-full -translate-y-1/2",
          "rounded-xl bg-white p-6 shadow-xl outline-none",
          typeof className === "string" ? className : undefined,
        )}
        {...props}
      >
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export interface DialogTitleProps extends BaseDialog.Title.Props {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <BaseDialog.Title
      className={cx(
        "text-lg font-semibold text-gray-900",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends BaseDialog.Description.Props {}

export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <BaseDialog.Description
      className={cx(
        "mt-1 text-sm text-gray-600",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface DialogCloseProps extends BaseDialog.Close.Props {}

export function DialogClose(props: DialogCloseProps) {
  return <BaseDialog.Close {...props} />;
}
