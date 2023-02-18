import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  city: "",
};

export const hotelAndParkingCity = createReducer(initialState, {
  SET_HOTELANDPARKINGCITY: (state, action) => {
    state.city = action.payload;
  },
});
