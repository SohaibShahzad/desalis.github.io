import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  city: "",
};

export const cityReducer = createReducer(initialState, {
  SET_CITY: (state, action) => {
    state.city = action.payload;
  },
});
