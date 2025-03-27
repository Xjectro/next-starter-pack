import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-surface-100 text-typography-50 flex flex-col gap-6 rounded-primary border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

const cardHeaderVariants = cva(
  "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
  {
    variants: {
      align: {
        center: "items-center",
        start: "items-start",
        end: "items-end",
      },
      orientation: {
        vertical: "flex flex-col",
        horizontal: "flex",
      },
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        align: "center",
        class: "justify-center",
      },
      {
        orientation: "horizontal",
        align: "start",
        class: "justify-start",
      },
      {
        orientation: "horizontal",
        align: "end",
        class: "justify-end",
      },
    ],
    defaultVariants: {
      align: "center",
      orientation: "vertical",
    },
  },
);

export type CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;

function CardHeader({
  className,
  orientation,
  align,
  ...props
}: React.ComponentProps<"div"> & CardHeaderVariants) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants({ orientation, align }), className)}
      {...props}
    />
  );
}

const cardTitleVariants = cva("leading-none", {
  variants: {
    size: {
      sm: "text-sm font-light",
      base: "text-base font-light",
      lg: "text-lg font-medium",
      xl: "text-xl font-bold",
      "2xl": "text-2xl font-bold",
      "3xl": "text-3xl font-bold",
      "4xl": "text-4xl font-bold",
      "5xl": "text-5xl font-bold",
    },
    text: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },
  defaultVariants: {
    size: "sm",
    text: "start",
  },
});

export type CardTitleVariants = VariantProps<typeof cardTitleVariants>;

function CardTitle({
  className,
  size,
  text,
  ...props
}: React.ComponentProps<"div"> & CardTitleVariants) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariants({ size, text }), className)}
      {...props}
    />
  );
}

const cardDescriptionVariants = cva("text-typography-500", {
  variants: {
    size: {
      sm: "text-sm font-light",
      base: "text-base font-light",
      lg: "text-lg font-medium",
      xl: "text-xl font-bold",
    },
    text: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },
  defaultVariants: {
    size: "sm",
    text: "start",
  },
});

export type CardDescriptionVariants = VariantProps<
  typeof cardDescriptionVariants
>;

function CardDescription({
  className,
  size,
  text,
  ...props
}: React.ComponentProps<"div"> & CardDescriptionVariants) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescriptionVariants({ size, text }), className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

const cardContentVariants = cva("px-6", {
  variants: {
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      align: "center",
      class: "justify-center",
    },
    {
      orientation: "horizontal",
      align: "start",
      class: "justify-start",
    },
    {
      orientation: "horizontal",
      align: "end",
      class: "justify-end",
    },
  ],
  defaultVariants: {
    align: "center",
    orientation: "vertical",
  },
});

export type CardContentVariants = VariantProps<typeof cardContentVariants>;

function CardContent({
  className,
  orientation,
  align,
  ...props
}: React.ComponentProps<"div"> & CardContentVariants) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ orientation, align }), className)}
      {...props}
    />
  );
}

const cardFooterVariants = cva("px-6 [.border-t]:pt-6", {
  variants: {
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      between: "justify-between",
    },
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-wrap",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      align: "center",
      class: "justify-center",
    },
    {
      orientation: "horizontal",
      align: "start",
      class: "justify-start",
    },
    {
      orientation: "horizontal",
      align: "end",
      class: "justify-end",
    },
    {
      orientation: "horizontal",
      align: "between",
      class: "justify-between",
    },
  ],
  defaultVariants: {
    align: "center",
    orientation: "horizontal",
  },
});

export type CardFooterVariants = VariantProps<typeof cardFooterVariants>;

function CardFooter({
  className,
  orientation,
  align,
  ...props
}: React.ComponentProps<"div"> & CardFooterVariants) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooterVariants({ orientation, align }), className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
