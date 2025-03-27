"use client";

import { useImports } from "@/hooks/useImports";
import { Button } from "@repo/ui/components/button";
import {
  decrement,
  incrementAsync,
} from "@repo/utils/lib/features/counter/counterSlice";

export function Counter() {
  const { dispatch, useAppSelector } = useImports();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col gap-10">
      <h2>{count}</h2>
      <div className="flex items-center gap-10">
        <Button onClick={() => dispatch(incrementAsync(10))}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
}
