import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Property Listing/Listing";
import Hotel from "./Pages/hotel/Hotel";
import Room from "./Components/roomForm/Room";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";

function App() {
  // const location = window.location.pathname;
  // console.log("app")
  // const dispatch = useDispatch();
  // if (location === "/") {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: true,
  //   });
  // } else {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: false,
  //   });
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
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
