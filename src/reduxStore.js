import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { value: [] },
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload);
    },
    decrement: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  }
});

export const { increment, decrement } = todoSlice.actions;
export const store = configureStore({ 
  reducer: { todos: todoSlice.reducer } 
});