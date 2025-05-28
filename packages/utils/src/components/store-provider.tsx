"use client";

import { Provider } from "react-redux";
import React from "react";
// import { PersistGate } from "redux-persist/integration/react";
import {
  AppStore,
  makeStore /** persistor */,
} from "@repo/utils/stores/configure-store";

export function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = React.useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      {/**<PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>*/}
      {children}
    </Provider>
  );
}
