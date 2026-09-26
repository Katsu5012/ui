import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface MenuProps extends BaseMenu.Root.Props {}

export function Menu(props: MenuProps) {
  return <BaseMenu.Root {...props} />;
}

export interface MenuTriggerProps extends BaseMenu.Trigger.Props {}

export function MenuTrigger(props: MenuTriggerProps) {
  return <BaseMenu.Trigger {...props} />;
}

export interface MenuContentProps extends BaseMenu.Popup.Props {
  children?: ReactNode;
  side?: BaseMenu.Positioner.Props["side"];
  align?: BaseMenu.Positioner.Props["align"];
  sideOffset?: BaseMenu.Positioner.Props["sideOffset"];
}

export function MenuContent({
  className,
  children,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  ...props
}: MenuContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BaseMenu.Popup
          className={cx(
            "min-w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg outline-none",
            typeof className === "string" ? className : undefined,
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export interface MenuItemProps extends BaseMenu.Item.Props {}

export function MenuItem({ className, ...props }: MenuItemProps) {
  return (
    <BaseMenu.Item
      className={cx(
        "flex cursor-default items-center gap-2 px-3 py-1.5 text-sm text-gray-900 outline-none select-none",
        "data-[highlighted]:bg-gray-100",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface MenuGroupProps extends BaseMenu.Group.Props {}

export function MenuGroup(props: MenuGroupProps) {
  return <BaseMenu.Group {...props} />;
}

export interface MenuGroupLabelProps extends BaseMenu.GroupLabel.Props {}

export function MenuGroupLabel({ className, ...props }: MenuGroupLabelProps) {
  return (
    <BaseMenu.GroupLabel
      className={cx(
        "px-3 py-1.5 text-xs font-medium text-gray-500",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}
