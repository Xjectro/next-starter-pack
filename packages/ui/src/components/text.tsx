import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      title: "text-typography-50",
      description: "text-typography-500",
      secondary: "text-typography-500",
    },
    size: {
      xs: "text-xs font-light",
      sm: "text-sm font-light",
      md: "text-md font-medium",
      base: "text-base font-medium",
      lg: "text-lg font-medium",
      xl: "text-xl font-medium",
      "2xl": "text-2xl font-bold",
      "3xl": "text-3xl font-bold",
      "4xl": "text-4xl font-bold",
      "5xl": "text-5xl font-bold",
      "6xl": "text-6xl font-bold",
    },
  },
  defaultVariants: {
    variant: "title",
    size: "base",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

const getTag = (variant?: TextVariants["variant"]) => {
  switch (variant) {
    case "title":
      return "h1";
    case "description":
      return "p";
    default:
      return "span";
  }
};

function Text({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"h1"> & TextVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot : getTag(variant);

  return (
    <Comp className={textVariants({ variant, size, className })} {...props} />
  );
}

export { Text, textVariants };
