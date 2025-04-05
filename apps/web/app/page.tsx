"use client";

import * as React from "react";
import { List } from "@/components/list";
import { Counter } from "@/components/counter";
import { Container } from "@/components/container";
import { Separator } from "@repo/ui/components/separator";

export default function Page() {
  console.log(process.env.NEXT_PUBLIC_APP_TITLE);
  return (
    <Container className="flex flex-col gap-10">
      <Counter />
      <Separator />
      <List />
    </Container>
  );
}
