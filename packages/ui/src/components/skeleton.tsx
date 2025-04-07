import { cva, type VariantProps } from "class-variance-authority";
import { PlayIcon } from "lucide-react";

const skeletonVariants = cva("bg-surface-400 animate-pulse", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-lg",
    },
  },
  defaultVariants: {
    shape: "square",
  },
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;

export function Skeleton({
  className,
  shape,
  ...props
}: React.ComponentProps<"div"> & SkeletonVariants) {
  return (
    <div
      data-slot="skeleton"
      className={skeletonVariants({ shape, className })}
      {...props}
    />
  );
}

export function PlayerSkeleton() {
  return (
    <Skeleton className="flex items-center justify-center w-full aspect-[16/9]">
      <PlayIcon className="size-10 md:size-16 lg:size-20 text-primary-500" />
    </Skeleton>
  );
}
