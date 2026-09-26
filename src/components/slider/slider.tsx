import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cx } from "@/lib/cx";

export interface SliderProps extends BaseSlider.Root.Props<number | readonly number[]> {}

export function Slider({ className, ...props }: SliderProps) {
  return (
    <BaseSlider.Root
      className={cx("w-56", typeof className === "string" ? className : undefined)}
      {...props}
    >
      <BaseSlider.Control className="flex w-full touch-none items-center py-2 select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
        <BaseSlider.Track className="h-1.5 w-full rounded-full bg-gray-200 select-none">
          <BaseSlider.Indicator className="rounded-full bg-blue-600 select-none" />
          <BaseSlider.Thumb className="size-4 rounded-full border border-gray-300 bg-white shadow-sm select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
