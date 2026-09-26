import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface AccordionProps extends BaseAccordion.Root.Props {}

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <BaseAccordion.Root
      className={cx(
        "w-full rounded-lg border border-gray-200",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface AccordionItemProps extends BaseAccordion.Item.Props {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <BaseAccordion.Item
      className={cx(
        "border-b border-gray-200 last:border-b-0",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface AccordionTriggerProps extends BaseAccordion.Trigger.Props {
  children?: ReactNode;
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <BaseAccordion.Header className="m-0">
      <BaseAccordion.Trigger
        className={cx(
          "group flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-gray-900",
          "hover:bg-gray-50",
          "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          typeof className === "string" ? className : undefined,
        )}
        {...props}
      >
        {children}
        <svg
          viewBox="0 0 10 6"
          fill="none"
          className="size-2.5 text-gray-500 transition-transform group-data-[panel-open]:rotate-180"
          aria-hidden
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export interface AccordionPanelProps extends BaseAccordion.Panel.Props {}

export function AccordionPanel({ className, children, ...props }: AccordionPanelProps) {
  return (
    <BaseAccordion.Panel
      className={cx(
        "overflow-hidden text-sm text-gray-700",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    >
      <div className="px-4 pb-3">{children as ReactNode}</div>
    </BaseAccordion.Panel>
  );
}
