"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      shiny:
        "bg-clip-text text-transparent bg-[length:300%_100%] animate-shine",
    },
    color: {
      foreground: "text-typography-50",
      muted: "text-typography-500",
      primary: "text-primary-500",
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
    color: "foreground",
  },
  compoundVariants: [
    {
      variant: "shiny",
      color: "primary",
      className:
        "bg-primary-500 bg-[linear-gradient(120deg,transparent_30%,var(--color-primary-800)_45%,transparent_60%)]",
    },
    {
      variant: "shiny",
      color: "foreground",
      className:
        "bg-typography-50 bg-[linear-gradient(120deg,transparent_30%,var(--color-typography-100)_45%,transparent_60%)]",
    },
    {
      variant: "shiny",
      color: "muted",
      className:
        "bg-typography-500 bg-[linear-gradient(120deg,transparent_30%,var(--color-typography-600)_45%,transparent_60%)]",
    },
  ],
});

export type TextVariants = VariantProps<typeof textVariants>;

export function Text({
  className,
  variant,
  size,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & TextVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={textVariants({ color, variant, size, className })}
      {...props}
    />
  );
}
