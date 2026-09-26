import { Input as BaseInput } from "@base-ui/react/input";
import { cx } from "@/lib/cx";

export interface InputProps extends BaseInput.Props {}

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      className={cx(
        "h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-2 focus:-outline-offset-1 focus:outline-blue-600",
        "disabled:pointer-events-none disabled:bg-gray-50 disabled:opacity-50",
        "aria-invalid:border-red-600 aria-invalid:focus:outline-red-600",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}
