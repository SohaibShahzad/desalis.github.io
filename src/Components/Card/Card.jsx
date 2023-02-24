import React, { useState } from "react";
import style from "./Card1.module.css";
import { useSelector, useDispatch } from "react-redux";
// import listing1 from "../../images/listing-01.jpg";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const Card = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, rating, description, country, pic, price } = props.item;
  const { cardData } = useSelector((state) => state.setCardData);
  const { options } = useSelector((state) => state.searchOption);
  const { city } = useSelector((state) => state.searchCity);
  const { dates } = useSelector((state) => state.searchDate);
  
  // const [value, setValue] = useState(3);
  // const [hover, setHover] = useState(5);
  // dates.map((item) => {
  //   let date1 = new Date(item.checkIn);
  //   let date2 = new Date(item.checkOut);
  // });

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const setSelectedHotel = () => {
    dispatch({
      type: "setHotelData",
      payload: props.item,
    });
    // console.log(props.item);
    navigate('/singleHotel');
  };
  // const [card, setCard] = useState({
  //   name: "",
  //   rating: "",
  //   attr1: "",
  //   attr2: "",
  //   attr3: "",
  //   attr4: "",
  //   attr5: "",
  //   attr6: "",
  //   price: "",
  //   previousPrice: "",
  //   description: "",
  // });

  // const handleChange = (e) => {
  //   const value = e.target.value;

  //   setCard({ ...card, [e.target.name]: value });
  // };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "setCard",
  //     payload: card,
  //   });
  //   setTimeout(() => {
  //     console.log(cardData);
  //   }, 5000);
  // };

  return (
    <div className="w-100 border rounded-2 mb-3">
      <div className="row">
        <div className="col-md-3 col-xl-3 col-sm-12">
          <div className="h-100 bg-image hover-zoom ripple rounded ripple-surface">
            <img src={pic} className="w-100 h-100" />
            <Link to="/">
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{
                    backgroundColor: "rgba(253, 253, 253, 0.15)",
                  }}
                ></div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-xl-6 col-sm-12 py-1 px-2">
          <div className="d-flex flex-column">
            <h5 className="my-xl-0 my-md-0 my-sm-2">{name}</h5>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={rating}
                precision={0.5}
                getLabelText={getLabelText}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
                // onChangeActive={(event, newHover) => {
                //   setHover(newHover);
                // }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {rating !== null && (
                <Box sx={{ mb: 1, fontSize: 17 }}>{labels[rating]}</Box>
              )}
            </Box>
          </div>

          <div className="d-flex flex-row">
            <span>
              <Link
                to="/"
                className="text-primary fs-8 fw-bold my-0 mx-md-0 mx-1"
              >
                {props.item.city}
              </Link>
            </span>
            <span>
              <div to="/" className="fs-8 fw-light my-0 mx-1">
                {country}
              </div>
            </span>
          </div>
          <div className="mt-1 mb-0 text-muted" style={{ fontSize: "12px" }}>
            <span>{cardData.attr1}</span>
            <span className="text-primary"> • </span>
            <span>{cardData.attr2}</span>
            <span className="text-primary"> • </span>
            <span>
              {cardData.attr3}
              <br />
            </span>
          </div>
          <div className="mb-2 text-muted small">
            <span>{cardData.attr4}</span>
            <span className="text-primary"> • </span>
            <span>{cardData.attr5}</span>
            <span className="text-primary"> • </span>
            <span>
              {cardData.attr6}
              <br />
            </span>
          </div>
          <div className={style.hide992}>
            {/* <small className="text-success d-block fs-7 fw-bold">
              Free cancellation - no prepayment needed
            </small>
            <small className="fs-7 text-muted">
              You can cancel later, so lock in this great price today.
            </small> */}
            <p className="mb-4 text-truncate mb-md-0">{description}</p>
          </div>
        </div>
        <div
          className={`col-md-3 col-xl-3 col-sm-12 border-start ${style.border_sm_start_none}`}
        >
          <div className="d-flex flex-column h-100 justify-content-end">
            <small className="fs-6 text-end fw-light text-muted">
              2 nights,10 adults,3 childer
            </small>
            <div className="d-flex ms-auto flex-row align-items-center">
              <h4 className="fw-bold mx-1 fs-4">
                {options.room > 1 ? price * options.room : price}$
              </h4>
              <span className="text-danger">
                <s>{options.room > 1 ? price * options.room : price + 50}$</s>
              </span>
            </div>
            <small className="text-muted text-end fs-7 fw-light">
              +{options.room > 1 ? price * options.room : price + 20}$ Tax and
              charges
            </small>
            <div className="d-flex flex-column mt-2">
              <a
                className="btn btn-outline-primary text-uppercase btn-md"
                type="button"
                onClick={setSelectedHotel}
              >
                {/* See Availability
                 */}
                Book {options.room} room{options.room > 1 ? "s" : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <Box
  sx={{
    width: 200,
    display: "flex",
    alignItems: "center",
  }}
>
  <Rating
    name="hover-feedback"
    value={rating}
    precision={0.5}
    getLabelText={getLabelText}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  />
  {rating !== null && (
    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
  )}
</Box>; */
}
