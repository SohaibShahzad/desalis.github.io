import { createReducer } from "@reduxjs/toolkit";
import Singlebed1 from "../../images/1bed.jpg";
import Singlebed2 from "../../images/1bed2.jpg";
import Singlebed3 from "../../images/1bed3.jpg";
import Twinbed1 from "../../images/2bed.jpg";
import Twinbed2 from "../../images/2bed1.jpg";
import Twinbed3 from "../../images/2bed3.jpg";
import Twinbed4 from "../../images/2bed4.jpg";
import Familybed1 from "../../images/family1.jpg";
import Familybed2 from "../../images/family2.jpg";
import Familybed3 from "../../images/family3.jpg";
import Familybed4 from "../../images/family4.jpg";

const initialState = {
  room_data: [
    {
      type: "Single",
      price: 15,
      pic: Singlebed1,
      description:
        "single room self-contained is a room usually only the bedroom that comes with personal toilet facilities and a small kitchenette along with the room. A lone single room consists of just a room. Communal bathroom and kitchen facilities are available for you and other members of the house",
    },
    {
      type: "Single",
      price: 15,
      pic: Singlebed2,
      description:
        "single room self-contained is a room usually only the bedroom that comes with personal toilet facilities and a small kitchenette along with the room. A lone single room consists of just a room. Communal bathroom and kitchen facilities are available for you and other members of the house",
    },
    {
      type: "Single",
      price: 15,
      pic: Singlebed3,
      description:
        "single room self-contained is a room usually only the bedroom that comes with personal toilet facilities and a small kitchenette along with the room. A lone single room consists of just a room. Communal bathroom and kitchen facilities are available for you and other members of the house",
    },
    {
      type: "Twin",
      price: 25,
      pic: Twinbed1,
      description:
        "A twin room will have a minimum of two bedrooms, a hall, and a kitchen. In most cases, there will be at least one toilet and bath. With three-bedroom apartments, one room will have its own toilet and bath.",
    },
    {
      type: "Twin",
      price: 25,
      pic: Twinbed2,
      description:
        "A twin room will have a minimum of two bedrooms, a hall, and a kitchen. In most cases, there will be at least one toilet and bath. With three-bedroom apartments, one room will have its own toilet and bath.",
    },
    {
      type: "Twin",
      price: 25,
      pic: Twinbed3,
      description:
        "A twin room will have a minimum of two bedrooms, a hall, and a kitchen. In most cases, there will be at least one toilet and bath. With three-bedroom apartments, one room will have its own toilet and bath.",
    },
    {
      type: "Twin",
      price: 25,
      pic: Twinbed4,
      description:
        "A twin room will have a minimum of two bedrooms, a hall, and a kitchen. In most cases, there will be at least one toilet and bath. With three-bedroom apartments, one room will have its own toilet and bath.",
    },
    {
      type: "Family",
      price: 40,
      pic: Familybed1,
      description:
        "A family room is an informal, all-purpose room in a house. The family room is designed to be a place where family and guests gather for group recreation like talking, reading, watching TV, and other family activities.",
    },
    {
      type: "Family",
      price: 40,
      pic: Familybed3,
      description:
        "A family room is an informal, all-purpose room in a house. The family room is designed to be a place where family and guests gather for group recreation like talking, reading, watching TV, and other family activities.",
    },
    {
      type: "Family",
      price: 40,
      pic: Familybed4,
      description:
        "A family room is an informal, all-purpose room in a house. The family room is designed to be a place where family and guests gather for group recreation like talking, reading, watching TV, and other family activities.",
    },
  ],
};

export const Room_Static_Data = createReducer(initialState, {
  setroomdata: (state, action) => {
    state.hotel_data = action.payload;
  },
});
