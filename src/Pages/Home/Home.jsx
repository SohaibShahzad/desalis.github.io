import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import MailList from "../../Components/mailList/MailList";
// import PropertyList from "../../Components/propertyList/PropertyList";
import style from "./home.module.css";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isXtraSmallScreen = useMediaQuery("(max-width: 450px)");
  return (
    <div>
      <Navbar list={true} />
      <div className={`${style.homeContainer} container`}>
        <h1
          className={`text-end  fw-bold ${isXtraSmallScreen ? "fs-3" : "fs-2"}`}
        >
          Luxury Properties Guests love
        </h1>

        <Featured />
        {/* <h1 className={`${style.homeTitle} container`}>
          Browse by property type
        </h1>
        <PropertyList /> */}
        <h1
          className={`text-end  fw-bold ${isXtraSmallScreen ? "fs-3" : "fs-2"}`}
        >
          Hotels Guests love
        </h1>
        <FeaturedProperties />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
