import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface TooltipProviderProps extends BaseTooltip.Provider.Props {}

export function TooltipProvider(props: TooltipProviderProps) {
  return <BaseTooltip.Provider {...props} />;
}

export interface TooltipProps extends BaseTooltip.Root.Props {}

export function Tooltip(props: TooltipProps) {
  return <BaseTooltip.Root {...props} />;
}

export interface TooltipTriggerProps extends BaseTooltip.Trigger.Props {}

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <BaseTooltip.Trigger {...props} />;
}

export interface TooltipContentProps extends BaseTooltip.Popup.Props {
  children?: ReactNode;
  side?: BaseTooltip.Positioner.Props["side"];
  sideOffset?: BaseTooltip.Positioner.Props["sideOffset"];
}

export function TooltipContent({
  className,
  children,
  side = "top",
  sideOffset = 6,
  ...props
}: TooltipContentProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
        <BaseTooltip.Popup
          className={cx(
            "rounded-md bg-gray-900 px-2.5 py-1.5 text-xs text-white shadow-md outline-none",
            typeof className === "string" ? className : undefined,
          )}
          {...props}
        >
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
