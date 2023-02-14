import React, { useState } from "react";
import style from "./Card1.module.css";
import { useSelector } from "react-redux";
import listing1 from "../../images/listing-01.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const Card = () => {
  // const dispatch = useDispatch();
  const { cardData } = useSelector((state) => state.setCardData);
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(5);

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
    <div className="w-100 container border rounded-2 p-1 mb-3">
      <div className="row">
        <div className="col-md-3 col-xl-3 col-sm-12">
          <div className="h-100 bg-image hover-zoom ripple rounded ripple-surface">
            <img src={listing1} className="w-100" />
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
        <div className="col-md-6 col-xl-6 col-sm-12">
          <h5 className="my-xl-0 my-md-0 my-sm-2">{cardData.name}</h5>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          <div className="d-flex flex-row">
            <Link
              to="/"
              className="text-primary fs-7 fw-bold my-0 mx-md-0 mx-1"
            >
              Show on map
            </Link>
            <div to="/" className="fs-7 fw-light my-0 mx-1">
              12.5km form center
            </div>
          </div>
          <div className="mt-1 mb-0 text-muted small">
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
            <small className="text-success d-block fs-7 fw-bold">
              Free cancellation - no prepayment needed
            </small>
            <small className="fs-7 text-muted">
              You can cancel later, so lock in this great price today.
            </small>
            <p className="mb-4 text-truncate mb-md-0">{cardData.description}</p>
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
              <h4 className="fw-bold mx-1 fs-4">{cardData.price}$</h4>
              <span className="text-danger">
                <s>{cardData.previousPrice}$</s>
              </span>
            </div>
            <small className="text-muted text-end fs-7 fw-light">
              +120$ Tax and charges
            </small>
            <div className="d-flex flex-column mt-4">
              <Link
                to="/"
                className="btn btn-outline-primary text-uppercase btn-md mt-2"
                type="button"
              >
                See Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <section style={{ backgroundColor: "#fff" }}>
//   <div className="container">
//     <div className="row justify-content-center mb-3">
//       <div className="col-md-12 col-xl-10">
//         <div className="card shadow-0 border rounded-3">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
//                 <div className="bg-image hover-zoom ripple rounded ripple-surface">
//                   <img
//                     src={listing1}
//                     // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
//                     className="w-100"
//                   />
//                   <a href="#!">
//                     <div className="hover-overlay">
//                       <div
//                         className="mask"
//                         style={{
//                           backgroundColor: "rgba(253, 253, 253, 0.15)",
//                         }}
//                       ></div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-6 col-xl-6">
//                 <h5>{cardData.name}</h5>
//                 <Box
//                   sx={{
//                     width: 200,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Rating
//                     name="hover-feedback"
//                     value={value}
//                     precision={0.5}
//                     getLabelText={getLabelText}
//                     onChange={(event, newValue) => {
//                       setValue(newValue);
//                     }}
//                     onChangeActive={(event, newHover) => {
//                       setHover(newHover);
//                     }}
//                     emptyIcon={
//                       <StarIcon
//                         style={{ opacity: 0.55 }}
//                         fontSize="inherit"
//                       />
//                     }
//                   />
//                   {value !== null && (
//                     <Box sx={{ ml: 2 }}>
//                       {labels[hover !== -1 ? hover : value]}
//                     </Box>
//                   )}
//                 </Box>
//                 <div className="d-flex flex-row">
//                   <Link
//                     to="/contact"
//                     className="text-primary fs-7 fw-bold my-0 mx-1"
//                   >
//                     location
//                   </Link>
//                   <Link
//                     to="/"
//                     className="text-primary fs-7 fw-bold my-0 mx-1"
//                   >
//                     show on map
//                   </Link>
//                   <Link to="/" className="fs-7 fw-light my-0 mx-1">
//                     12.5km form center
//                   </Link>
//                 </div>
//                 <div className="mt-1 mb-0 text-muted small">
//                   <span>{cardData.attr1}</span>
//                   <span className="text-primary"> • </span>
//                   <span>{cardData.attr2}</span>
//                   <span className="text-primary"> • </span>
//                   <span>
//                     {cardData.attr3}
//                     <br />
//                   </span>
//                 </div>
//                 <div className="mb-2 text-muted small">
//                   <span>{cardData.attr4}</span>
//                   <span className="text-primary"> • </span>
//                   <span>{cardData.attr5}</span>
//                   <span className="text-primary"> • </span>
//                   <span>
//                     {cardData.attr6}
//                     <br />
//                   </span>
//                 </div>
//                 <small className="text-success d-block fs-7 fw-bold">
//                   Free cancellation - no prepayment needed
//                 </small>
//                 <small className="fs-7 text-muted">
//                   You can cancel later, so lock in this great price today.
//                 </small>
//                 <p className="mb-4 text-truncate mb-md-0">
//                   {cardData.description}
//                 </p>
//               </div>
//               <div
//                 className={`col-md-6 col-lg-3 col-xl-3 ${style.border_sm_start_none} border-start`}
//               >
//                 <div className="d-flex flex-column h-100 justify-content-end">
//                   <small className="fs-7 text-end fw-light text-muted">
//                     2 nights,10 adults,3 childer
//                   </small>
//                   <div className="d-flex ms-auto flex-row align-items-center">
//                     <h4 className="fw-bold mx-1 fs-4">{cardData.price}$</h4>
//                     <span className="text-danger">
//                       <s>{cardData.previousPrice}$</s>
//                     </span>
//                   </div>
//                   <small className="text-muted text-end fs-7 fw-light">
//                     +120$ Tax and charges
//                   </small>

//                   <div className="d-flex flex-column mt-4">
//                     <Link
//                       to="/"
//                       className="btn btn-outline-primary text-uppercase btn-md mt-2"
//                       type="button"
//                     >
//                       See Availability
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

{
  /* <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>PTDC Hotels</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>289</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For men</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">$14.99</h4>
                      <span className="text-danger">
                        <s>$21.99</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-primary btn-sm text-uppercase"
                        type="button"
                      >
                        Details
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>Burj Khalifa</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>145</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For women</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">$17.99</h4>
                      <span className="text-danger">
                        <s>$25.99</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-primary btn-sm text-uppercase"
                        type="button"
                      >
                        Details
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
// </div>
// </section>
