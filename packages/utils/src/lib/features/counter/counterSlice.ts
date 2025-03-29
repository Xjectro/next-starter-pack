import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.value += 1;
    }),
    decrement: create.reducer((state) => {
      state.value -= 1;
    }),
    incrementByAmount: create.preparedReducer(
      (amount: number = 1) => ({ payload: amount }),
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    ),
  }),
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        },
      );
  },
  selectors: {
    selectValue: (state) => state.value,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { selectValue } = counterSlice.selectors;
