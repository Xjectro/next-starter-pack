"use client";

import * as React from "react";
import { List } from "@/components/list";
import { Counter } from "@/components/counter";
import { Page } from "@/components/page";
import { Separator } from "@repo/ui/components/separator";

export default function HomePage() {
  return (
    <Page className="flex flex-col gap-10 mt-5">
      <Counter />
      <Separator />
      <List />
    </Page>
  );
}
