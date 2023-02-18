import React from "react";
import image from "../../images/listing-01.jpg";
const ParkingCard = () => {
  const card = {
    title: "Card title",
    rating: "4.5",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: "$100",
  };
  return (
    <>
      <div className="card my-3 shadow mx-4">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <img src={image} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h3 className="card-title">{card.title}</h3>
          <p>{card.rating}</p>
          <p className="card-text">{card.desc}</p>
          <div className="mt-3">
            <h4>{card.price}</h4>
          </div>
        </div>

        <div className="card-body">
          <button className="btn btn-primary btn-block">Book now</button>
        </div>
      </div>
    </>
  );
};

export default ParkingCard;
