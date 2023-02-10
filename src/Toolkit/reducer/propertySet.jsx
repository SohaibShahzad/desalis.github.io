import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  userdata: {},
  titlefile: null,
  //   multifiles: [],
};

export const propertySetform = createReducer(initialState, {
  setuserdata: (state, action) => {
    state.userdata = action.payload;
  },
  settitlefile: (state, action) => {
    state.titlefile = action.payload;
  },
  // setmultiplefiles: (state,action) => {
  //     state.value -= 1;
  // }
});
