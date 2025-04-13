"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@repo/ui/components";
import { StoreProvider } from "@repo/utils/components";
import { DefaultPreloadPage } from "@/components/Container";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<DefaultPreloadPage />}>
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
