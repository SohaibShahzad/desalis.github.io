import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  dates: [],
};

export const dateReducer = createReducer(initialState, {
  SET_DATE: (state, action) => {
    state.dates = action.payload;
  },
});
