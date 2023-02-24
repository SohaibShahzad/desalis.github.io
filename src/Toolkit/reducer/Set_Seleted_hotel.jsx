import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  selected_hotel: {},
};

export const Selected_Hotel = createReducer(initialState, {
  setHotelData: (state, action) => {
    state.selected_hotel = action.payload;
  },
});
