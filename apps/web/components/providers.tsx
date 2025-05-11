"use client";

import React from "react";

import { StoreProvider } from "@repo/utils/components";
import { DefaultPreloadPage } from "@/components/Page";
import {
  Provider as ThemeProvider,
  Toaster,
} from "@xjectro/react/ui/components";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<DefaultPreloadPage />}>
      <ThemeProvider>
        <Toaster position="bottom-center" />
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    </React.Suspense>
  );
}
