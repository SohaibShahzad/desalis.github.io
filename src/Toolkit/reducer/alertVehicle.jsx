import { createReducer } from "@reduxjs/toolkit";

const initialState = { resultVehicle: false };

export const alertVehicle = createReducer(initialState, {
  ALERTVEHICLE: (state, action) => {
    state.resultVehicle = action.payload;
  },
});
