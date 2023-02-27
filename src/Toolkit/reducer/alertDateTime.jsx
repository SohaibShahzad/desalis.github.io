import { createReducer } from "@reduxjs/toolkit";

const initialState = { resultDateTime: false };

export const alertDateTime = createReducer(initialState, {
  ALERTDATETIME: (state, action) => {
    state.resultDateTime = action.payload;
  },
});
