import { createReducer } from "@reduxjs/toolkit";

const initialState = { resultPerson: false };

export const alertPerson = createReducer(initialState, {
  ALERTPERSON: (state, action) => {
    state.resultPerson = action.payload;
  },
});
