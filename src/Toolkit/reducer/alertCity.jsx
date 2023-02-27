import { createReducer } from "@reduxjs/toolkit";

const initialState = { resultCity: false };

export const alertCity = createReducer(initialState, {
  "ALERTCITY": (state, action) => {
    state.resultCity = action.payload;
  },
});
