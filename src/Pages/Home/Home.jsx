import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import MailList from "../../Components/mailList/MailList";
// import PropertyList from "../../Components/propertyList/PropertyList";
import style from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar list={true} />
      <div className={`${style.homeContainer} container`}>
        <Featured />
        {/* <h1 className={`${style.homeTitle} container`}>
          Browse by property type
        </h1>
        <PropertyList /> */}
        <h1 className={`${style.homeTitle} container`}>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
