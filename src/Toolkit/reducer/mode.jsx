import { createReducer } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

export const mode = createReducer(initialState, {
  MODE: (state, action) => {
    state.mode = action.payload;
  },
});
