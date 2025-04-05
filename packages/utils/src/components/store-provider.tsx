"use client";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store /** persistor */ } from "@repo/utils/stores/configureStore";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/**<PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>*/}
      {children}
    </Provider>
  );
}
