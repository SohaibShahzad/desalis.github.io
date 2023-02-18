import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Property Listing/Listing";
import Hotel from "./Pages/hotel/Hotel";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
// import Map from "./Components/Map/Map";
import List from "./Pages/list/List";
import HotelForm from "./Pages/hotelForm/Hotel";
import RoomForm from "./Pages/roomForm/Room";
import Parking from "./Pages/Parking Section/Parking";
import Roomcard from "./Components/RoomCard/Roomcard";
import ParkingList from "./Pages/ParkingList/ParkingList";
import HotelAndParking from "./Pages/HotelAndParking/HotelAndParking";

function App() {
  return (
    <>
      {/* <Map /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roomcard" element={<Roomcard />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listproperty" element={<Listing />} />
        <Route path="/listHotel" element={<List />} />
        <Route path="/singleHotel" element={<Hotel />} />
        <Route path="/addHotel" element={<HotelForm />} />
        <Route path="/addRoom" element={<RoomForm />} />
        <Route path="/ParkingList" element={<ParkingList />} />
        <Route path="/HotelAndParking" element={<HotelAndParking />} />
      </Routes>
    </>
  );
}

export default App;
