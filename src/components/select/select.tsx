import { Select as BaseSelect } from "@base-ui/react/select";
import { cx } from "@/lib/cx";

export interface SelectItem {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<BaseSelect.Root.Props<string, false>, "items"> {
  items: SelectItem[];
  placeholder?: string;
  className?: string;
}

export function Select({ items, placeholder, className, ...props }: SelectProps) {
  return (
    <BaseSelect.Root items={items} {...props}>
      <BaseSelect.Trigger
        className={cx(
          "flex h-10 min-w-40 items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900",
          "data-[placeholder-shown]:text-gray-400",
          "focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-600",
          "data-[disabled]:pointer-events-none data-[disabled]:bg-gray-50 data-[disabled]:opacity-50",
          className,
        )}
      >
        <BaseSelect.Value placeholder={placeholder} />
        <BaseSelect.Icon className="flex text-gray-500">
          <svg viewBox="0 0 10 6" fill="none" className="size-2.5" aria-hidden>
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={4} alignItemWithTrigger={false}>
          <BaseSelect.Popup className="min-w-(--anchor-width) rounded-lg border border-gray-200 bg-white py-1 shadow-lg outline-none">
            {items.map((item) => (
              <BaseSelect.Item
                key={item.value}
                value={item.value}
                className={cx(
                  "flex cursor-default items-center gap-2 px-3 py-1.5 text-sm text-gray-900 outline-none select-none",
                  "data-[highlighted]:bg-gray-100",
                  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}
              >
                <BaseSelect.ItemIndicator className="flex text-blue-600">
                  <svg viewBox="0 0 12 10" fill="none" className="size-3" aria-hidden>
                    <path
                      d="M1 5l3.5 3.5L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </BaseSelect.ItemIndicator>
                <BaseSelect.ItemText>{item.label}</BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
