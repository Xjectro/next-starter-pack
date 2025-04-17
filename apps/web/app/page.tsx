"use client";

import * as React from "react";
import { List } from "@/components/List";
import { Counter } from "@/components/Counter";
import { Page } from "@/components/Page";
import { Separator } from "@repo/ui/components";

export default function HomePage() {
  return (
    <Page direction="vertical" align="center" spacing="loose">
      <Counter />
      <Separator />
      <List />
    </Page>
  );
}
