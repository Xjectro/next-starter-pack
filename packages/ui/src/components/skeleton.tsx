import { cn } from "@repo/ui/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-surface-400 animate-pulse rounded-primary", className)}
      {...props}
    />
  );
}

export { Skeleton };
