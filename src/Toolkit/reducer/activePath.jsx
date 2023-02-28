import { createReducer } from "@reduxjs/toolkit";

const initialState = { activePath: "hotel" };

export const activePath = createReducer(initialState, {
  activePath: (state, action) => {
    state.activePath = action.payload;
  },
});
