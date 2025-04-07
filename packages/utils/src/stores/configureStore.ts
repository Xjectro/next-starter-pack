import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { counterSlice } from "@repo/utils/stores/counterSlice";
import { api } from "@repo/utils/services/api";
import { createWrapper } from "next-redux-wrapper";
// import { persistStore } from "redux-persist";

const rootReducer = combineSlices(api, counterSlice);

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  });

// export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
