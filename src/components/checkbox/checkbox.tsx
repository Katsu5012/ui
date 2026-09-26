import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cx } from "@/lib/cx";

export interface CheckboxProps extends BaseCheckbox.Root.Props {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <BaseCheckbox.Root
      className={cx(
        "flex size-5 items-center justify-center rounded border border-gray-300 bg-white transition-colors",
        "data-[checked]:border-blue-600 data-[checked]:bg-blue-600",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className="text-white data-[unchecked]:hidden">
        <svg viewBox="0 0 12 10" fill="none" className="size-3" aria-hidden>
          <path
            d="M1 5l3.5 3.5L11 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
