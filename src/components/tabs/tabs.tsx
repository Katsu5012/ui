import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cx } from "@/lib/cx";

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <BaseTabs.Root className={typeof className === "string" ? className : undefined} {...props} />
  );
}

export interface TabsListProps extends BaseTabs.List.Props {}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <BaseTabs.List
      className={cx(
        "flex gap-1 rounded-lg bg-gray-100 p-1",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface TabsTabProps extends BaseTabs.Tab.Props {}

export function TabsTab({ className, ...props }: TabsTabProps) {
  return (
    <BaseTabs.Tab
      className={cx(
        "flex h-8 flex-1 items-center justify-center rounded-md px-3 text-sm font-medium text-gray-600 transition-colors",
        "hover:text-gray-900",
        "data-[selected]:bg-white data-[selected]:text-gray-900 data-[selected]:shadow-sm",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel({ className, ...props }: TabsPanelProps) {
  return (
    <BaseTabs.Panel
      className={cx(
        "pt-3 text-sm text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}
