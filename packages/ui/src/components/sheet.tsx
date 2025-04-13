"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/components/Button";
import { textVariants } from "@repo/ui/components/Text";
import { cva, type VariantProps } from "class-variance-authority";

export const sheetContentVariants = cva(
  "group data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      variant: {
        default: "bg-surface-50 !border-surface-300",
        solid: "bg-solid-500 !border-solid-800",
      },
      side: {
        right:
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 rounded-l-xl border-l sm:max-w-sm",
        left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 rounded-r-xl border-r sm:max-w-sm",
        top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 rounded-b-xl h-auto border-b",
        bottom:
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom pb-10 inset-x-0 bottom-0 rounded-t-xl h-auto border-t",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

export type SheetContentVariants = VariantProps<typeof sheetContentVariants>;

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-xl bg-black/20",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  variant = "solid",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & SheetContentVariants) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-variant={variant}
        className={sheetContentVariants({ side, variant, className })}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={cn(
            buttonVariants({ variant: "subtle", size: "icon" }),
            "absolute right-0 top-0 m-5",
          )}
        >
          <XIcon className="size-5" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 px-5 pt-5 pb-2", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 px-5 py-3", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={textVariants({ color: "foreground", size: "lg", className })}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={textVariants({ color: "muted", size: "sm", className })}
      {...props}
    />
  );
}

function SheetItem({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "transition-all text-base flex items-center w-full gap-2 py-3 px-4 rounded-md bg-transparent group-data-[variant=default]:text-ghost-foreground group-data-[variant=solid]:text-solid-foreground group-data-[variant=default]:hover:bg-ghost-500 group-data-[variant=solid]:hover:bg-solid-800",
        className,
      )}
      {...props}
    />
  );
}

function SheetItems({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col items-start w-full px-5", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetItem,
  SheetItems,
  SheetDescription,
};
