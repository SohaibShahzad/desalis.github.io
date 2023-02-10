import { createReducer } from "@reduxjs/toolkit";

const initialState = { user: false };

export const userLogin = createReducer(initialState, {
  USER_LOGIN: (state, action) => {
    return { ...state, user: action.payload };
  },
});
