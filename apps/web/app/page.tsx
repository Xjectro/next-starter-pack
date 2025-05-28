"use client";

import * as React from "react";
import { List } from "@/components/home/list";
import { CommonWrapper} from "@/components/common/wrapper";
import { Counter } from "@/components/home/counter";

import { Separator } from "@xjectro/react/components/separator";

export default function HomePage() {
  return (
    <CommonWrapper>
      <Counter />
      <Separator />
      <List />
    </CommonWrapper>
  );
}
