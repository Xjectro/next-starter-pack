"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@repo/ui/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "transition-all peer data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-surface-100 inline-flex h-7 w-14 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "transition-all data-[state=unchecked]:bg-surface-800 data-[state=checked]:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 data-[state=checked]:translate-x-[calc(100%+10px)] data-[state=unchecked]:translate-x-1",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
