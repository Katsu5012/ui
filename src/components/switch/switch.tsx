import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { cx } from '../../lib/cx';

export interface SwitchProps extends BaseSwitch.Root.Props {}

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root
      className={cx(
        'relative flex h-6 w-10 rounded-full p-1 transition-colors',
        'bg-gray-300 data-[checked]:bg-blue-600',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        typeof className === 'string' ? className : undefined,
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        className={cx(
          'aspect-square h-full rounded-full bg-white shadow-sm transition-transform',
          'data-[checked]:translate-x-4',
        )}
      />
    </BaseSwitch.Root>
  );
}
