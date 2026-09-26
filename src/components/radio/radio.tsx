import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cx } from "@/lib/cx";

export interface RadioGroupProps extends BaseRadioGroup.Props {}

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={cx("flex flex-col gap-2", typeof className === "string" ? className : undefined)}
      {...props}
    />
  );
}

export interface RadioProps extends BaseRadio.Root.Props {}

export function Radio({ className, ...props }: RadioProps) {
  return (
    <BaseRadio.Root
      className={cx(
        "flex size-5 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors",
        "data-[checked]:border-blue-600 data-[checked]:bg-blue-600",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-white data-[unchecked]:hidden" />
    </BaseRadio.Root>
  );
}
