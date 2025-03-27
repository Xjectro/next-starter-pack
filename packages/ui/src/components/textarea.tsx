import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";

const textareaVariants = cva(
  "flex cursor-pointer focus:cursor-text w-full border-none bg-surface-100 rounded-primary p-3 placeholder:text-typography-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-300 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400",
  {
    variants: {
      size: {
        sm: "min-h-[46px] max-h-[200px] text-sm",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;

function Textarea({
  className,
  size,
  onChange,
  ...props
}: React.ComponentProps<"textarea"> & TextareaVariants) {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  return (
    <span className="relative w-full">
      <textarea
        data-slot="textarea"
        className={cn(textareaVariants({ size }), className)}
        onChange={handleChange}
        {...props}
      />
      <span className="absolute bottom-1 right-2 font-medium text-typography-50 pointer-events-none">
        {value.length}
      </span>
    </span>
  );
}

export { Textarea };
