import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  options: { adult: 1, children: 0, room: 1 },
};

export const optionReducer = createReducer(initialState, {
  SET_OPTION: (state, action) => {
    state.options = action.payload;
  },
});
