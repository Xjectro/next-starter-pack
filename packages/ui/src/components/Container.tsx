"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("container", {
  variants: {
    direction: {
      horizontal: "flex",
      vertical: "flex flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    spacing: {
      none: "gap-0",
      tight: "gap-3",
      normal: "gap-5",
      loose: "gap-10",
    },
  },
  defaultVariants: {
    spacing: "normal",
  },
});

type ContainerVariants = VariantProps<typeof containerVariants>;

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ContainerVariants {
  as?: React.ElementType;
}

export function Container({
  justify,
  align,
  spacing,
  direction,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={containerVariants({
        justify,
        align,
        direction,
        spacing,
        className,
      })}
      {...props}
    />
  );
}
