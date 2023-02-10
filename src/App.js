import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Property Listing/Listing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signup />}/>
      </Routes>
      {/* <Card /> */}
      {/* <Contact /> */}
      {/* <Signup /> */}
      {/* <Listing /> */}
    </>
  );
}

export default App;
