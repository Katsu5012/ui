import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

export type BadgeVariant = "neutral" | "info" | "success" | "warning" | "danger";

export interface BadgeProps extends ComponentProps<"span"> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-gray-100 text-gray-700",
  info: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-red-100 text-red-700",
};

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
