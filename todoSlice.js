import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: []
  },
  reducers: {
    increment: (state) => {
      state.value.push("Стандартная задача");
    },
    decrement: (state) => {
      state.value.pop(); 
    }
  }
});

export const { increment, decrement } = todoSlice.actions;
export default todoSlice.reducer;