import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  dates: [],
};

export const parkingDateReducer = createReducer(initialState, {
  SETPARKING_DATE: (state, action) => {
    state.dates = action.payload;
  },
});
