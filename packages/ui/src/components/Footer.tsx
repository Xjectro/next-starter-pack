import React from "react";
import { cn } from "@repo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { injectPropsToChildren } from "@repo/ui/utils";

export const footerVariants = cva("w-full p-4 gap-6", {
  variants: {
    color: {
      solid: "bg-solid-500 border-t !border-solid-800",
      danger: "bg-danger-500 border-t !border-danger-800",
      surface: "bg-surface-100 border-t !border-surface-300",
    },
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    },
    variant: {
      default: "border-t",
      outlined: "rounded-lg border",
    },
  },
  defaultVariants: {
    variant: "default",
    columns: 3,
    color: "solid",
  },
});

export type FooterVariants = VariantProps<typeof footerVariants>;

type FooterBaseProps = {
  "data-color"?: FooterVariants["color"];
};

export function Footer({
  color = "solid",
  columns,
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"footer"> & FooterVariants) {
  const wrappedChildren = injectPropsToChildren(children, {
    components: [FooterItem, FooterBrand, FooterSeparator],
    props: { "data-color": color },
  });

  const footerContent = (
    <footer
      data-slot="footer"
      className={cn(
        footerVariants({ color, columns, variant, className }),
        variant === "outlined" && "grid",
      )}
      {...props}
    >
      {variant === "default" ? (
        <div className="container grid">{wrappedChildren}</div>
      ) : (
        wrappedChildren
      )}
    </footer>
  );

  return variant === "outlined" ? (
    <div className="container">{footerContent}</div>
  ) : (
    footerContent
  );
}

export const footerSectionVariants = cva("flex flex-col gap-3", {
  variants: {
    align: {
      start: "items-start text-left",
      center: "items-center text-center",
      end: "items-end text-right",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export type FooterSectionVariants = VariantProps<typeof footerSectionVariants>;

export function FooterSection({
  align,
  className,
  ...props
}: React.ComponentProps<"div"> & FooterSectionVariants & FooterBaseProps) {
  return (
    <div
      data-slot="footer-section"
      className={cn(footerSectionVariants({ align }), className)}
      {...props}
    />
  );
}

export function FooterItem({
  className,
  ...props
}: React.ComponentProps<"div"> & FooterBaseProps) {
  return (
    <div
      data-slot="footer-item"
      className={cn(
        "text-sm data-[color=solid]:text-solid-100 data-[color=surface]:text-typography-500 data-[color=danger]:text-danger-100",
        className,
      )}
      {...props}
    />
  );
}

export function FooterBrand({
  className,
  ...props
}: React.ComponentProps<"div"> & FooterBaseProps) {
  return (
    <div
      data-slot="footer-brand"
      className={cn(
        "text-lg font-bold data-[color=solid]:text-solid-foreground data-[color=surface]:text-typography-50 data-[color=danger]:text-danger-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function FooterSeparator(
  props: React.ComponentProps<"hr"> & FooterBaseProps,
) {
  return (
    <hr
      data-slot="footer-separator"
      className="col-span-full border-t data-[color=solid]:!border-solid-800 data-[color=surface]:text-surface-500 data-[color=danger]:text-danger-800"
      {...props}
    />
  );
}
