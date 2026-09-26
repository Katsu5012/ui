import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends BaseAvatar.Root.Props {
  src?: string;
  alt?: string;
  /** Fallback content shown while the image loads or when it fails (e.g. initials). */
  fallback?: ReactNode;
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
};

export function Avatar({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root
      className={cx(
        "inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 font-medium text-gray-600 select-none",
        sizeClasses[size],
        typeof className === "string" ? className : undefined,
      )}
      {...props}
    >
      {src ? <BaseAvatar.Image src={src} alt={alt} className="size-full object-cover" /> : null}
      <BaseAvatar.Fallback className="flex size-full items-center justify-center">
        {fallback}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}
