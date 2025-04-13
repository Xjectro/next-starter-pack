import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm border px-2 py-1 text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:border-danger-500 transition-[color,box-shadow] focus-visible:scale-[1.1] overflow-hidden",
  {
    variants: {
      variant: {
        solid:
          "!border-transparent bg-solid-500 text-solid-foreground [a&]:hover:bg-solid-600",
        soft: "!border-surface-300 bg-surface-200 text-typography-50 [a&]:hover:bg-surface-300",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & BadgeVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={badgeVariants({ variant, className })}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
