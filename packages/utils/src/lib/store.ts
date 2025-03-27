import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { api } from "../services/api";

const rootReducer = combineSlices(api, counterSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
