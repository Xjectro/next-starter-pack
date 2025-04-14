import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        soft: "bg-surface-100 text-typography-50",
        solid: "bg-solid-500 text-solid-foreground",
        danger:
          "text-danger-500 bg-surface-100 [&>svg]:text-current *:data-[slot=alert-description]:text-danger-500/90",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & AlertVariants) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-typography-500 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
