import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-1 aria-invalid:ring-destructive-500",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-primary-foreground shadow-xs hover:bg-primary-600",
        destructive:
          "bg-destructive-500 text-white shadow-xs hover:bg-destructive-600",
        outline:
          "border border-surface-300 bg-surface-100 shadow-xs hover:bg-surface-200 text-typography-300 hover:text-typography-50",
        secondary:
          "bg-surface-100 border border-surface-300 hover:bg-surface-200 text-typography-50 shadow-xs",
        ghost: "hover:bg-ghost-500 hover:text-typography-50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "gap-1.5 px-3 py-1.5 has-[>svg]:px-2.5",
        lg: "py-3 px-6 has-[>svg]:px-4",
        icon: "size-10",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-primary",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "square",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
