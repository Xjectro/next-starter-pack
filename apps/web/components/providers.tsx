"use client";

import React from "react";

import { StoreProvider } from "@repo/utils/components";
import { DefaultPreloadPage } from "@/components/Page";
import { StyleProvider, Toaster } from "@xjectro/react/components";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<DefaultPreloadPage />}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <StyleProvider>
          <Toaster position="bottom-center" />
          <StoreProvider>{children}</StoreProvider>
        </StyleProvider>
      </ThemeProvider>
    </React.Suspense>
  );
}
