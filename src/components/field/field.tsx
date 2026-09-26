import { Field as BaseField } from "@base-ui/react/field";
import { cx } from "@/lib/cx";

export interface FieldProps extends BaseField.Root.Props {}

export function Field({ className, ...props }: FieldProps) {
  return (
    <BaseField.Root
      className={cx("flex flex-col gap-1.5", typeof className === "string" ? className : undefined)}
      {...props}
    />
  );
}

export interface FieldLabelProps extends BaseField.Label.Props {}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <BaseField.Label
      className={cx(
        "text-sm font-medium text-gray-900",
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    />
  );
}

export interface FieldDescriptionProps extends BaseField.Description.Props {}

export function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <BaseField.Description
      className={cx("text-sm text-gray-500", typeof className === "string" ? className : undefined)}
      {...props}
    />
  );
}

export interface FieldErrorProps extends BaseField.Error.Props {}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <BaseField.Error
      className={cx("text-sm text-red-600", typeof className === "string" ? className : undefined)}
      {...props}
    />
  );
}
