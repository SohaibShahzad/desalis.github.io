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
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import HotelsList from "./Pages/HotelsList/HotelsList";

function App() {
  return (
    <>
      {/* <Dropdown /> */}
      {/* <Map /> */}
      {/* <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/listHotel" element={<List />} />
        <Route path="/singleHotel" element={<Hotel />} />
        <Route path="/addHotel" element={<HotelForm />} />
        <Route path="/addRoom" element={<RoomForm />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/ParkingList" element={<ParkingList />} />
        <Route path="/HotelAndParking" element={<HotelAndParking />} />
        <Route path="/HotelAndParkingList" element={<List />} />
        <Route path="/singleHotelAndParking" element={<Hotel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listproperty" element={<Listing />} />
        <Route path="/roomcard" element={<Roomcard />} />
      </Routes> */}

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/HotelsList" element={<HotelsList />} />
        <Route path="/UsersList" element={<HotelsList />} />
      </Routes>

    </>
  );
}

export default App;
