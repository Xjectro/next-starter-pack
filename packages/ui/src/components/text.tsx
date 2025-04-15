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
      solid: "text-solid-500",
    },
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
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
    lineClamp: {
      0: "line-clamp-none",
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
    },
    leading: {
      0: "leading-0",
      snug: "leading-snug",
    },
    break: {
      all: "break-all",
      keep: "break-keep",
      normal: "break-normal",
      words: "break-words",
    },
  },
  defaultVariants: {
    color: "foreground",
    align: "start",
  },
  compoundVariants: [
    {
      variant: "shiny",
      color: "solid",
      className:
        "bg-solid-500 bg-[linear-gradient(120deg,transparent_30%,var(--color-solid-800)_45%,transparent_60%)]",
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

type TextProps = React.ComponentProps<React.ElementType> &
  TextVariants & { asChild?: boolean; as?: React.ElementType };

export function Text({
  className,
  variant,
  size,
  color,
  align,
  leading,
  lineClamp,
  asChild = false,
  as,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : as || "span";

  return (
    <Comp
      className={textVariants({
        color,
        variant,
        leading,
        size,
        className,
        align,
        lineClamp,
      })}
      {...props}
    />
  );
}
