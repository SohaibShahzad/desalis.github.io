import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contactData: {},
};

export const setContactData = createReducer(initialState, {
  setData: (state, action) => {
    state.contactData = action.payload;
  },
});
