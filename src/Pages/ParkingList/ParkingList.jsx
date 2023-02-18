import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ParkingCard from "../../Components/ParkingCard/ParkingCard";

const ParkingList = () => {
  const card = [
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
    {
      title: "Card title",
      rating: "4.5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "$100",
    },
  ];
  return (
    <div>
      <Navbar list={false} />
      <div className="mt-5 row justify-content-start w-100">
        {card.map((item) => (
          <div className="col-4">
            <ParkingCard/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingList;
