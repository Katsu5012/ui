import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cx } from "@/lib/cx";

export interface ProgressProps extends BaseProgress.Root.Props {}

export function Progress({ className, ...props }: ProgressProps) {
  return (
    <BaseProgress.Root
      className={cx("w-56", typeof className === "string" ? className : undefined)}
      {...props}
    >
      <BaseProgress.Track className="block h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <BaseProgress.Indicator className="block h-full rounded-full bg-blue-600" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
