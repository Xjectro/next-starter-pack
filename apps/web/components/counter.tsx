"use client";

import { useAppSelector, useAppDispatch } from "@repo/utils/lib/redux";
import {
  decrement,
  incrementByAmount,
  incrementAsync,
  selectValue,
} from "@repo/utils/stores/counterSlice";

import { Button, Text,Container } from "@xjectro/react/ui/components";

export function Counter() {
  const count = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <Container direction="vertical" spacing="xl" className="w-full">
      <Text variant="shiny" color="primary" size="4xl">
        {count}
      </Text>
      <Container direction="horizontal" spacing="xl" as="span">
        <Button size="lg" onClick={() => dispatch(incrementAsync(10))}>
          Increment Async
        </Button>
        <Button size="lg" onClick={() => dispatch(incrementByAmount(5))}>
          Increment
        </Button>
        <Button size="lg" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Container>
    </Container>
  );
}
