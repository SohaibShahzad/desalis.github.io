import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ParkingCard from "../../Components/ParkingCard/ParkingCard";
import { useSelector } from "react-redux";

const ParkingList = () => {
  const { parking_data } = useSelector((state) => state.getStaticParking);
  const { cityParking } = useSelector((state) => state.searchParkingCity);

  let filtered_data = parking_data.filter(
    (item) => item.city.toLowerCase() === cityParking.toLowerCase()
  );
  console.log("your data", filtered_data);
  // const card = [
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  //   {
  //     title: "Card title",
  //     rating: "4.5",
  //     desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     price: "$100",
  //   },
  // ];
  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar list={false} />
      <div className="mt-3 row">
        {filtered_data === [] ? (
          <h3 className="text-center text-dark bg-warning">
            No Parking Available In this City
          </h3>
        ) : (
          filtered_data.map((item) => (
            <div className="col-lg-3  col-md-4 col-sm-12">
              <ParkingCard data={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ParkingList;
