import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cardData: {
    name: "PC HOTEL SUITES",
    rating: "315",
    attr1: "2 Beds",
    attr2: "Attached Bathroom",
    attr3: "Jacuzzi",
    attr4: "Buffet Breakfast",
    attr5: "Dinner",
    attr6: "Pool",
    price: "110",
    previousPrice: "120",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  },
};

export const setCard = createReducer(initialState, {
  setData: (state, action) => {
    state.contactData = action.payload;
  },
});
