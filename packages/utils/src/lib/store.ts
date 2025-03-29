import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { api } from "../services/api";

const rootReducer = combineSlices(api, counterSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
