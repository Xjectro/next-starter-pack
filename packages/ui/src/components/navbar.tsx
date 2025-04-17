import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/ui/lib/utils";
import { useWindowScroll } from "react-use";

export const DEFAULT_NAVBAR_HEIGHT = 66;
export const FLOATING_MARGIN = 20;

const navbarVariants = cva(
  "flex items-center gap-5 backdrop-blur-xl will-change-transform",
  {
    variants: {
      position: {
        default: "fixed top-0 z-50",
        static: "z-10",
      },
      variant: {
        default: "w-full border-b",
        floating: "px-5 w-[90vw] md:w-[80vw] lg:w-[60vw] rounded-xl border",
      },
    },
    defaultVariants: {
      position: "default",
      variant: "default",
    },
  },
);

export type NavbarVariants = VariantProps<typeof navbarVariants>;

interface NavbarProps extends NavbarVariants, React.ComponentProps<"nav"> {
  shouldHideOnScroll?: boolean;
  isBackground?: boolean;
}

export function Navbar({
  position,
  variant = "default",
  shouldHideOnScroll = false,
  isBackground = false,
  className,
  children,
  ...props
}: NavbarProps) {
  const navbarRef = useRef<HTMLElement | null>(null);
  const { y: scrollY } = useWindowScroll();
  const [beforeScrollY, setBeforeScrollY] = React.useState(scrollY);
  const [yPosition, setYPosition] = React.useState(0);

  const NAVBAR_HEIGHT =
    navbarRef?.current?.offsetHeight || DEFAULT_NAVBAR_HEIGHT;

  const maxOffset =
    variant === "floating" ? NAVBAR_HEIGHT + FLOATING_MARGIN : NAVBAR_HEIGHT;

  React.useEffect(() => {
    if (!shouldHideOnScroll || position === "static") return;

    const delta = scrollY - beforeScrollY;
    const newYPosition = Math.min(Math.max(0, yPosition + delta), maxOffset);

    setBeforeScrollY(scrollY);
    setYPosition(newYPosition);
  }, [
    shouldHideOnScroll,
    position,
    scrollY,
    maxOffset,
    beforeScrollY,
    yPosition,
  ]);

  const content =
    variant === "default" ? (
      <div
        className={cn(
          "container flex h-full w-full items-center gap-5",
          className,
        )}
      >
        {children}
      </div>
    ) : (
      children
    );

  const opacity = isBackground ? 1 - yPosition / maxOffset : 1;

  return (
    <nav
      ref={navbarRef}
      style={{
        backgroundColor: isBackground
          ? `oklch(var(--surface-100) / ${opacity})`
          : "transparent",
        borderColor: isBackground
          ? `oklch(var(--surface-300) / ${opacity})`
          : "transparent",
        transform: `translateY(-${yPosition}px)`,
        minHeight: DEFAULT_NAVBAR_HEIGHT,
        marginTop: variant === "floating" ? `${FLOATING_MARGIN}px` : "0px",
      }}
      className={navbarVariants({
        position,
        variant,
        className: variant === "default" ? undefined : className,
      })}
      {...props}
    >
      {content}
    </nav>
  );
}

interface NavbarContentProps extends React.ComponentProps<"ul"> {
  justify?: "start" | "center" | "end";
}

export function NavbarContent({
  justify = "start",
  className,
  ...props
}: NavbarContentProps) {
  return (
    <ul
      data-justify={justify}
      className={cn(
        "flex h-full w-full flex-row items-center gap-5 data-[justify=start]:justify-start data-[justify=end]:justify-end data-[justify=center]:justify-center",
        className,
      )}
      {...props}
    />
  );
}

export function NavbarItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("flex items-center gap-2", className)} {...props} />;
}
