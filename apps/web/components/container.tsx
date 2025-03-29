import React from "react";

import { cn } from "@repo/ui/lib/utils";

export function Container({
  children,
  className,
}: React.PropsWithChildren & React.ComponentProps<"div">) {
  return <div className={cn("container", className)}>{children}</div>;
}
