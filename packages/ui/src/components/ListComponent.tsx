"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ScrollArea } from "@repo/ui/components/ScrollArea";

const listComponentVariants = cva("", {
  variants: {
    variant: {
      scroll: "flex items-center",
      grid: "grid",
      wrap: "flex flex-wrap",
    },
  },
  defaultVariants: {},
});

export type ListComponentVariants = VariantProps<typeof listComponentVariants>;

export interface ListComponentProps
  extends ListComponentVariants,
    React.ComponentProps<"div"> {
  data: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

export function ListComponent({
  data,
  renderItem,
  variant = undefined,
  className,
  ...props
}: ListComponentProps) {
  const mapped = data.map((item, index) => (
    <span key={index}>{renderItem(item, index)}</span>
  ));
  let content: React.ReactNode;
  if (variant == undefined) {
    content = <article className={className}>{mapped}</article>;
  } else {
    content = (
      <div className={listComponentVariants({ variant, className })} {...props}>
        {mapped}
      </div>
    );
  }

  if (variant === "scroll") {
    return <ScrollArea className="h-auto w-full">{content}</ScrollArea>;
  }

  return content;
}
