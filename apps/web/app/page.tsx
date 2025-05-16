"use client";

import * as React from "react";
import { List } from "@/components/List";
import { Page } from "@/components/Page";
import { Counter } from "@/components/Counter";

import { Separator } from "@xjectro/react/components";

export default function HomePage() {
  return (
    <Page>
      <Counter />
      <Separator />
      <List />
    </Page>
  );
}
