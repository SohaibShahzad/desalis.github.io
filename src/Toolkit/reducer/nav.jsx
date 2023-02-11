import { createReducer } from "@reduxjs/toolkit";

const initialState = { c: true };

export const nav = createReducer(initialState, {
  sethoteldata: (state, action) => {
    state.hotelData = action.payload;
  },
});
