import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cx } from "@/lib/cx";

export interface SeparatorProps extends BaseSeparator.Props {}

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={cx(
        "bg-gray-200",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}
