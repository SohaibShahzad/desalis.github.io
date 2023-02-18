import { configureStore } from "@reduxjs/toolkit";
import { userLogin } from "./reducer/userLogin";
import { setCard } from "./reducer/CardReducer";
import { setContactData } from "./reducer/contactData";
import { propertySetform } from "./reducer/propertySet";
import { HotelForm } from "./reducer/HotelReducer";
import { RoomForm } from "./reducer/RoomReducer";
import { nav } from "./reducer/nav";
import { dateReducer } from "./reducer/date_search";
import { cityReducer } from "./reducer/city_search";
import { optionReducer } from "./reducer/option_search";
import { parkingDateReducer } from "./reducer/ParkingDate_search";
import { noOfVehicle } from "./reducer/noOfVehicle";

const store = configureStore({
  reducer: {
    // Add reducers here
    user: userLogin,
    setpropertyData: propertySetform,
    setData: setContactData,
    setCardData: setCard,
    setHotelData: HotelForm,
    setRoomData: RoomForm,
    navOpen: nav,
    searchDate: dateReducer,
    searchCity: cityReducer,
    searchOption: optionReducer,
    searchParkingDate: parkingDateReducer,
    searchVehicle: noOfVehicle,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
