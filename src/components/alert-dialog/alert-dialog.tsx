import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface AlertDialogProps extends BaseAlertDialog.Root.Props {}

export function AlertDialog(props: AlertDialogProps) {
  return <BaseAlertDialog.Root {...props} />;
}

export interface AlertDialogTriggerProps extends BaseAlertDialog.Trigger.Props {}

export function AlertDialogTrigger(props: AlertDialogTriggerProps) {
  return <BaseAlertDialog.Trigger {...props} />;
}

export interface AlertDialogContentProps extends BaseAlertDialog.Popup.Props {
  children?: ReactNode;
}

export function AlertDialogContent({ className, children, ...props }: AlertDialogContentProps) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 bg-black/40" />
      <BaseAlertDialog.Popup
        className={cx(
          "fixed inset-x-4 top-1/2 mx-auto w-96 max-w-full -translate-y-1/2",
          "rounded-xl bg-white p-6 shadow-xl outline-none",
          typeof className === "string" ? className : undefined,
        )}
        {...props}
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  );
}

export interface AlertDialogTitleProps extends BaseAlertDialog.Title.Props {}

export function AlertDialogTitle({ className, ...props }: AlertDialogTitleProps) {
  return (
    <BaseAlertDialog.Title
      className={cx(
        "text-lg font-semibold text-gray-900",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface AlertDialogDescriptionProps extends BaseAlertDialog.Description.Props {}

export function AlertDialogDescription({ className, ...props }: AlertDialogDescriptionProps) {
  return (
    <BaseAlertDialog.Description
      className={cx(
        "mt-1 text-sm text-gray-600",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface AlertDialogCloseProps extends BaseAlertDialog.Close.Props {}

export function AlertDialogClose(props: AlertDialogCloseProps) {
  return <BaseAlertDialog.Close {...props} />;
}
