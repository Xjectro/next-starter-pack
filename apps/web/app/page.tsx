"use client";

import * as React from "react";
import { List } from "@/components/List";
import { Counter } from "@/components/Counter";
import { Container } from "@/components/Container";
import { Separator } from "@repo/ui/components";

export default function Page() {
  return (
    <Container className="flex flex-col gap-10">
      <Counter />
      <Separator />
      <List />
    </Container>
  );
}
