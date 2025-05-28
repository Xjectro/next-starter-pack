"use client";

import React from "react";

import { StoreProvider } from "@repo/utils/components/store-provider";
import { PreloadPage } from "@/components/common/preload-page";
import { StyleProvider } from "@xjectro/react/components/style-provider";
import { Toaster } from "@xjectro/react/components/sonner";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<PreloadPage />}>
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
