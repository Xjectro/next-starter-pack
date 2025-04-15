import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-1 aria-invalid:ring-danger-500",
  {
    variants: {
      variant: {
        solid:
          "border border-solid-800 bg-gradient-to-t to-solid-500 from-solid-700 text-solid-foreground hover:to-solid-700",
        danger:
          "border border-danger-800 bg-danger-500 text-white hover:bg-danger-700",
        outline:
          "border border-surface-300 bg-surface-100 hover:bg-surface-200 hover:ring-4 hover:ring-surface-300 hover:border-surface-500 text-typography-300 hover:text-typography-50",
        surface:
          "bg-surface-200 border border-surface-300 hover:bg-surface-300 text-typography-300 hover:text-typography-50",
        ghost:
          "text-typography-50 md:text-typography-500 hover:bg-ghost-500 md:hover:text-typography-50",
        link: "text-typography-50 underline-offset-4 hover:underline",
        subtle: "text-solid-foreground hover:bg-solid-800",
      },
      size: {
        sm: "gap-1.5 px-3 py-1.5 has-[>svg]:px-2.5",
        md: "px-4 py-2 has-[>svg]:px-3",
        lg: "py-3 px-6 has-[>svg]:px-4",
        icon: "size-10 justify-center",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "solid",
      shape: "square",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
