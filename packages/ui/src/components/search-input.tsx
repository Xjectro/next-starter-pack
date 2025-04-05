"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Search } from "lucide-react";

export const searchInputVariants = cva(
  "transition-all flex items-center gap-3 rounded-primary bg-surface-200 hover:bg-surface-300 focus-visible:border-primary-500 border border-surface-300",
  {
    variants: {
      size: {
        sm: "h-[46px] pl-3 text-sm",
        md: "h-[56px] pl-3 text-sm",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export type SearchInputVariants = VariantProps<typeof searchInputVariants>;

export function SearchInput({
  className,
  size,
  onSearch,
  ...props
}: React.ComponentProps<"input"> &
  SearchInputVariants & { onSearch: (query: string) => void }) {
  const [value, setValue] = React.useState<string>("");

  const handleSearch = () => {
    if (value.length < 2) {
      return;
    }
    if (onSearch) {
      onSearch(encodeURIComponent(value));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <span className={searchInputVariants({ size, className })}>
      <input
        type="text"
        className="cursor-pointer focus:cursor-text w-full border-none outline-none bg-transparent placeholder:text-typography-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <button
        className="h-full px-4 rounded-primary bg-primary-500 font-medium text-sm text-primary-foreground"
        onClick={handleSearch}
      >
        <Search className="size-5" />
      </button>
    </span>
  );
}
