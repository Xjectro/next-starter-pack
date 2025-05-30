"use client";

import { useAppSelector, useAppDispatch } from "@repo/utils/lib/redux";
import {
  decrement,
  incrementByAmount,
  incrementAsync,
  selectValue,
} from "@repo/utils/stores/counter-slice";

import { Button } from "@xjectro/react/components/button";
import { Typography } from "@xjectro/react/components/typography";
import { Container } from "@xjectro/react/components/container";

export function Counter() {
  const count = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <Container direction="vertical" spacing="xl" className="w-full">
      <Typography variant="shiny" color="primary" size="4xl" as="h2">
        {count}
      </Typography>
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
