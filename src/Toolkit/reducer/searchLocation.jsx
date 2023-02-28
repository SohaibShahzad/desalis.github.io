import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  searchLoc: "",
};

export const setSearchLoaction = createReducer(initialState, {
  setUserLocation: (state, action) => {
    state.searchLoc = action.payload;
  },
});
