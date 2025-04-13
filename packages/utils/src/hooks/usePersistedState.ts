import React from "react";

export function usePersistedState<T>(key: string, initialValue: any) {
  const [value, setValue] = React.useState(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      return initialValue;
    }

    return JSON.parse(item) as T;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}
