import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  hotelData: {
    
  },
};

export const HotelForm = createReducer(initialState, {
  sethoteldata: (state, action) => {
    state.hotelData = action.payload;
  },
});
