import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ReactNode } from "react";

/** Imperative toast API. Call inside a <ToastProvider>: `useToast().add({ title, description })`. */
export const useToast = BaseToast.useToastManager;

function ToastList() {
  const { toasts } = BaseToast.useToastManager();
  return toasts.map((toast) => (
    <BaseToast.Root
      key={toast.id}
      toast={toast}
      className="pointer-events-auto w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
    >
      <BaseToast.Title className="text-sm font-semibold text-gray-900" />
      <BaseToast.Description className="mt-0.5 text-sm text-gray-600" />
      <BaseToast.Close
        aria-label="Close"
        className="absolute top-2 right-2 flex size-6 items-center justify-center rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      >
        <svg viewBox="0 0 10 10" fill="none" className="size-2.5" aria-hidden>
          <path
            d="M1 1l8 8M9 1l-8 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </BaseToast.Close>
    </BaseToast.Root>
  ));
}

export interface ToastProviderProps extends BaseToast.Provider.Props {
  children?: ReactNode;
}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <BaseToast.Provider {...props}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className="pointer-events-none fixed right-4 bottom-4 flex w-72 flex-col-reverse gap-2">
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}
