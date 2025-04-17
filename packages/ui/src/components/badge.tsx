import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:border-danger-500 transition-[color,box-shadow] focus-visible:scale-[1.1] overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "!border-transparent bg-primary-500 text-primary-foreground [a&]:hover:bg-primary-600",
        surface:
          "!border-surface-300 bg-surface-200 text-typography-50 [a&]:hover:bg-surface-300",
      },
      size: {
        sm: "px-1 py-0.5 text-xs",
        md: "px-2 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & BadgeVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={badgeVariants({ variant, size, className })}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
