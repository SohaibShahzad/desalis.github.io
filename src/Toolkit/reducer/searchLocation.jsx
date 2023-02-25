import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  seacrhLoc: ''
};

export const setSearchLoaction = createReducer(initialState, {
  setUserLocation: (state, action) => {
    state.seacrhLoc = action.payload;
  },
});
