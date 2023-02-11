import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Property Listing/Listing";
import { Route, Routes } from "react-router-dom";
import Hotel from './Components/hotelForm/Hotel';
import Room from './Components/roomForm/Room';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes> */}
      <Card />
      {/* <Contact /> */}
      {/* <Listing /> */}
      {/* <Hotel /> */}
      {/* <Room /> */}
    </>
  );
}

export default App;
