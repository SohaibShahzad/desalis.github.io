import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  roomData: {
    
  },
};

export const RoomForm = createReducer(initialState, {
  setroomdata: (state, action) => {
    state.roomData = action.payload;
  },
});
