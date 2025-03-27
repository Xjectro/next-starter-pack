"use client";

import React from "react";
import { Toaster } from "@repo/ui/components/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { StoreProvider } from "@repo/utils/components/store-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback="Loading...">
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <Toaster position="bottom-center" />
        <StoreProvider>{children}</StoreProvider>
      </NextThemesProvider>
    </React.Suspense>
  );
}
