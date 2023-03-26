import { createReducer } from "@reduxjs/toolkit";

const initialState = { view: "admin" };

export const view = createReducer(initialState, {
  admin: (state, action) => {
    state.view = action.payload;
  },
  patner: (state, action) => {
    state.view = action.payload;
  },
  user: (state, action) => {
    state.view = action.payload;
  },
});
