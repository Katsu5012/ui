import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cx(
        "min-h-20 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-2 focus:-outline-offset-1 focus:outline-blue-600",
        "disabled:pointer-events-none disabled:bg-gray-50 disabled:opacity-50",
        "aria-invalid:border-red-600 aria-invalid:focus:outline-red-600",
        className,
      )}
      {...props}
    />
  );
}
