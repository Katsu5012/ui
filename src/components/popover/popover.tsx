import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface PopoverProps extends BasePopover.Root.Props {}

export function Popover(props: PopoverProps) {
  return <BasePopover.Root {...props} />;
}

export interface PopoverTriggerProps extends BasePopover.Trigger.Props {}

export function PopoverTrigger(props: PopoverTriggerProps) {
  return <BasePopover.Trigger {...props} />;
}

export interface PopoverContentProps extends BasePopover.Popup.Props {
  children?: ReactNode;
  side?: BasePopover.Positioner.Props["side"];
  align?: BasePopover.Positioner.Props["align"];
  sideOffset?: BasePopover.Positioner.Props["sideOffset"];
}

export function PopoverContent({
  className,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  ...props
}: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BasePopover.Popup
          className={cx(
            "max-w-xs rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 shadow-lg outline-none",
            typeof className === "string" ? className : undefined,
          )}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export interface PopoverTitleProps extends BasePopover.Title.Props {}

export function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return (
    <BasePopover.Title
      className={cx(
        "font-semibold text-gray-900",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface PopoverCloseProps extends BasePopover.Close.Props {}

export function PopoverClose(props: PopoverCloseProps) {
  return <BasePopover.Close {...props} />;
}
