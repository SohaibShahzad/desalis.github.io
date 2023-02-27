import { createReducer } from "@reduxjs/toolkit";

const initialState = { resultDate: false };

export const alertDate = createReducer(initialState, {
  ALERTDATE: (state, action) => {
    state.resultDate = action.payload;
  },
});
