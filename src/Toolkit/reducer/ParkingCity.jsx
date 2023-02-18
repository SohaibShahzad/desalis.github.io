import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  city: "",
};

export const cityParkingReducer = createReducer(initialState, {
    SET_PARKINGCITY: (state, action) => {
    state.city = action.payload;
  },
});
