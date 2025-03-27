import React from "react";

import { cn } from "@repo/ui/lib/utils";

export function Page({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
