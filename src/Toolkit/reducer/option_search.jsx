import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  options: { adult: 1, children: 0, singleRoom: 1, twinRoom: 0, familyRoom: 0 },
};

export const optionReducer = createReducer(initialState, {
  SET_OPTION: (state, action) => {
    state.options = action.payload;
  },
});
