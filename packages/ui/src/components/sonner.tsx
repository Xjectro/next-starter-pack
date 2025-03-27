"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group cursor-grab"
      style={
        {
          "--normal-bg": "var(--surface-100)",
          "--normal-text": "var(--typography-50)",
          "--normal-border": "var(--surface-500)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
