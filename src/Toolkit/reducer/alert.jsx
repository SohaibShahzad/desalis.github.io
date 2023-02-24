import { createReducer } from "@reduxjs/toolkit";

const initialState = { result: true };

export const alertReducer = createReducer(initialState, {
  "ALERT": (state, action) => {
    state.result = action.payload;
  },
});
