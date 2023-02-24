import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cityHotelAndParking: "",
};

export const hotelAndParkingCity = createReducer(initialState, {
  SET_HOTELANDPARKINGCITY: (state, action) => {
    state.cityHotelAndParking = action.payload;
  },
});
