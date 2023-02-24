import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cityParking: "",
};

export const cityParkingReducer = createReducer(initialState, {
    SET_PARKINGCITY: (state, action) => {
    state.cityParking = action.payload;
  },
});
