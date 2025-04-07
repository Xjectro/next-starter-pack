"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ScrollArea } from "@repo/ui/components/scroll-area";

const listComponentVariants = cva("", {
  variants: {
    variant: {
      scroll: "flex items-center",
      grid: "grid",
      wrap: "flex flex-wrap",
    },
  },
  defaultVariants: {
    variant: "wrap",
  },
});

export type ListComponentVariants = VariantProps<typeof listComponentVariants>;

export interface ListComponentProps
  extends ListComponentVariants,
    React.ComponentProps<"div"> {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
}

export function ListComponent({
  data,
  renderItem,
  variant,
  className,
  ...props
}: ListComponentProps) {
  const content = (
    <div className={listComponentVariants({ variant, className })} {...props}>
      {data.map((item, index) => (
        <span key={index}>{renderItem(item)}</span>
      ))}
    </div>
  );

  if (variant === "scroll") {
    return <ScrollArea className="h-auto max-w-full">{content}</ScrollArea>;
  }

  return content;
}
