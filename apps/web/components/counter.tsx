"use client";

import { useImports } from "@/hooks/useImports";
import { Button } from "@repo/ui/components/button";
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
      <h2>{count}</h2>
      <div className="flex items-center gap-10">
        <Button onClick={() => dispatch(incrementAsync(10))}>
          Increment Async
        </Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          Increment
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
}
