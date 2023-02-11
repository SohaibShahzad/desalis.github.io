import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Property Listing/Listing";
import { Route, Routes } from "react-router-dom";
import Hotel from "./Pages/hotel/Hotel";
import Room from "./Components/roomForm/Room";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
function App() {
  return (
    <>
    <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes> */}
      {/* <Home /> */}
      {/* <Hotel /> */}
      {/* <Card /> */}
      {/* <Contact /> */}
      {/* <Listing /> */}
      {/* <Hotel /> */}
      {/* <Room /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
    </>
  );
}

export default App;
