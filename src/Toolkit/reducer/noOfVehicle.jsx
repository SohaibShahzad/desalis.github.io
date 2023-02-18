import { createReducer } from "@reduxjs/toolkit";

const initialState = { c: 0 };

export const noOfVehicle = createReducer(initialState, {
  INCREMENT: (state, action) => {
    state.c = action.payload;
  },
});
