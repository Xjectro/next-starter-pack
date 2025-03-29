"use client";

import * as React from "react";
import { List } from "@/components/list";
import { Counter } from "@/components/counter";
import { Container } from "@/components/container";
import { Separator } from "@repo/ui/components/separator";

export default function Page() {
  return (
    <Container className="flex flex-col gap-10 mt-5">
      <Counter />
      <Separator />
      <List />
    </Container>
  );
}
