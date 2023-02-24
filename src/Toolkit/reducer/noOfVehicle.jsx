import { createReducer } from "@reduxjs/toolkit";

const initialState = { c: null };

export const noOfVehicle = createReducer(initialState, {
  INCREMENT: (state, action) => {
    state.c = action.payload;
  },
});
