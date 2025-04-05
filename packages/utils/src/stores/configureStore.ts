import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { api } from "../services/api";
// import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [counterSlice.reducerPath]: counterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

// export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
