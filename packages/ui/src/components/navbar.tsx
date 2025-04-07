"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/ui/lib/utils";

const navbarVariants = cva(
  "transition-all duration-300 flex h-auto sm:h-[66px] gap-5 px-5 data-[visible=false]:-translate-y-full data-[visible=true]:translate-y-0 data-[visible=false]:opacity-0 data-[visible=true]:opacity-100 data-[scrolled=false]:bg-transparent data-[scrolled=false]:backdrop-blur-xl data-[scrolled=true]:bg-surface-100",
  {
    variants: {
      position: {
        default: "fixed top-0 z-50",
        static: "static",
      },
      variant: {
        default: "w-full border-b !border-surface-300",
        floating:
          "w-[90vw] md:w-[80vw] lg:w-[60vw] mt-5 rounded-xl border !border-surface-300",
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
}

export function Navbar({
  position,
  variant,
  shouldHideOnScroll = false,
  className,
  ...props
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);

      if (shouldHideOnScroll) {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldHideOnScroll]);

  return (
    <nav
      data-visible={isVisible}
      data-scrolled={isScrolled}
      className={navbarVariants({ position, variant, className })}
      {...props}
    />
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
        "flex flex-row items-center w-full gap-5 h-full data-[justify=start]:justify-start data-[justify=center]:justify-center data-[justify=end]:justify-end",
        className,
      )}
      {...props}
    />
  );
}

export function NavbarItem(props: React.ComponentProps<"li">) {
  return <li {...props} />;
}
