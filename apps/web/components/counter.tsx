"use client";

import { useImports } from "@/hooks/useImports";
import { Button, Text } from "@repo/ui/components";
import {
  decrement,
  incrementByAmount,
  incrementAsync,
  selectValue,
} from "@repo/utils/stores/counterSlice";

export function Counter() {
  const { dispatch, useAppSelector } = useImports();
  const count = useAppSelector(selectValue);

  return (
    <div className="flex flex-col gap-10">
      <Text variant="shiny" color="primary" size="4xl">
        {count}
      </Text>
      <div className="flex items-center gap-10">
        <Button size="lg" onClick={() => dispatch(incrementAsync(10))}>
          Increment Async
        </Button>
        <Button size="lg" onClick={() => dispatch(incrementByAmount(5))}>
          Increment
        </Button>
        <Button size="lg" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
