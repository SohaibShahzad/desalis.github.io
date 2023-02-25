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
import { cityParkingReducer } from "./reducer/ParkingCity";
import { hotelAndParkingCity } from "./reducer/hotelAndParkingCity";
import { Hotel_Static_Data } from "./reducer/static_hotel_data";
import { Parking_Static_Data } from "./reducer/static_parking_data";
import { Hotel_Parking_Static_Data } from "./reducer/static_hotel_parking";
import { Selected_Hotel } from "./reducer/Set_Seleted_hotel";
import { Room_Static_Data } from "./reducer/static_room_data";
import { alertReducer } from "./reducer/alert";

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
    searchParkingCity: cityParkingReducer,
    searchHotelAndParkingCity: hotelAndParkingCity,
    getStaticHotels: Hotel_Static_Data,
    getSelectedHotel: Selected_Hotel,
    getStaticroom: Room_Static_Data,
    personAlert: alertReducer,
    getStaticParking: Parking_Static_Data,
    getStaicHotalParking: Hotel_Parking_Static_Data,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
