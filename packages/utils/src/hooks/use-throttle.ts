import React from "react";

export function useThrottle<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): T {
  const lastCall = React.useRef(0);

  return React.useCallback(
    ((...args: any[]) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        func(...args);
      }
    }) as T,
    [func, delay],
  );
}
