import { cva, type VariantProps } from "class-variance-authority";

const skeletonVariants = cva("bg-surface-400 animate-pulse", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-primary",
    },
  },
  defaultVariants: {
    shape: "square",
  },
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;

function Skeleton({
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

export { Skeleton };
