import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cx } from "@/lib/cx";

export interface ToggleProps extends BaseToggle.Props {}

export function Toggle({ className, ...props }: ToggleProps) {
  return (
    <BaseToggle
      className={cx(
        "flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium text-gray-600 transition-colors",
        "hover:bg-gray-100 hover:text-gray-900",
        "data-[pressed]:bg-gray-200 data-[pressed]:text-gray-900",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface ToggleGroupProps extends BaseToggleGroup.Props {}

export function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      className={cx(
        "flex gap-1 rounded-lg border border-gray-200 p-1",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}
