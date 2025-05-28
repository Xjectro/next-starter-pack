import React from "react";

import { Navbar } from "@/components/common/navbar";
import { cn } from "@xjectro/react/lib/utils";
import { Container, ContainerProps } from "@xjectro/react/components/container";
import { Spinner } from "@xjectro/react/components/loaders";

export function DefaultPreloadPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export function CommonWrapper({ className, ...props }: ContainerProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      <Container
        direction="vertical"
        align="start"
        layout="wide"
        spacing="xl"
        as="main"
        className={cn("mt-36 w-full pb-24", className)}
        {...props}
      />
    </div>
  );
}
