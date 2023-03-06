import "./hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Roomcard from "../../Components/RoomCard/Roomcard";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Person from "@mui/icons-material/Person";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BedIcon from "@mui/icons-material/Bed";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DoneIcon from "@mui/icons-material/Done";
import { useMediaQuery } from "@mui/material";

// import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { SearchContext } from "../../context/SearchContext";
// import { AuthContext } from "../../context/AuthContext";
// import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  // const location = useLocation();

  // const { city } = useSelector((state) => state.searchCity);
  // const { dates } = useSelector((state) => state.searchDate);
  // const { options } = useSelector((state) => state.searchOption);
  const { room_data } = useSelector((state) => state.getStaticroom);
  // console.log(city, dates, options);
  const { selected_hotel } = useSelector((state) => state.getSelectedHotel);
  // if (selected_hotel) {
  //   console.log(selected_hotel);
  // }

  // const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // Calculating available parking slots
  let availableParkingSlots =
    selected_hotel.parking_total_slots - selected_hotel.parking_booked_slots;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  // to move modal left and right
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  //card responsiveness for mobile screen
  const isXtraSmallScreen = useMediaQuery("(max-width:400px)");

  const data = {
    name: "Hotel Pod Roza",
    address: "ul. Floriańska 1, 31-005 Kraków, Poland",
    distance: "0.1",
    cheapestPrice: "100",
    photos: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Hotel Pod Roza",
    price: "100",
    desc: "Hotel Pod Roza is located in the heart of Krakow, just 100 metres from the Main Market Square. It offers air-conditioned rooms with free Wi-Fi and satellite TV. The rooms at the Pod Roza are classically decorated with warm colours. Each comes with a private bathroom with a shower. Some rooms have a balcony. The hotel’s restaurant serves Polish and international cuisine. Guests can enjoy a drink at the bar. The Pod Roza is situated just 200 metres from the Wawel Royal Castle. The Main Railway Station is 1.5 km away. The hotel offers a 24-hour front desk service. Free public parking is available nearby.",
    facilities: [
      "Free WiFi",
      "Free parking",
      "Restaurant",
      "Bar",
      "24-hour front desk",
      "Non-smoking rooms",
      "Family rooms",
      "Lift",
      "Heating",
      "Air conditioning",
      "Designated smoking area",
      "Non-smoking throughout",
      "Wheelchair accessible",
      "Toilet with grab rails",
      "Higher level toilet",
      "Lower bathroom sink",
      "Emergency cord in bathroom",
      "Visual aids: Braille",
      "Visual aids: Tactile signs",
      "Visual aids: Large print",
      "Visual aids: Low vision aids",
      "Visual aids: ECO Friendly",
      "Visual aids: Other",
    ],
    reviews: [
      {
        name: "John",
        rating: "4",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
      },
    ],
    rating: "4.5",
  };

  const handleClick = () => {
    // if (user) {
    //   setOpenModal(true);
    // } else {
    //   navigate("/login");
    // }
  };

  // To handle see more button
  let [limit, setLimit] = useState(6);
  const handleSeemore = () => {
    limit === data.facilities.length
      ? setLimit(6)
      : setLimit(data.facilities.length);
  };

  // To disable scroll when modal is open
  useEffect(() => {
    const disableScroll = () => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };
    window.addEventListener("scroll", disableScroll);
    return () => window.removeEventListener("scroll", disableScroll);
  }, [open]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar list={false} />
      {false ? (
        "loading"
      ) : (
        <div className="hotelContainer continer-fluid">
          {open && (
            <div className="slider">
              <div className="sliderWrapper">
                <CloseIcon
                  className="close"
                  onClick={() => {
                    setOpen(false);
                    document.body.style.overflow = "visible";
                  }}
                />
                <ArrowBackIosNewIcon
                  className="arrow fs-1"
                  onClick={() => handleMove("l")}
                />
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
                <ArrowForwardIosNewIcon
                  className="arrow fs-1"
                  onClick={() => handleMove("r")}
                />
              </div>
            </div>
          )}
          <div className="hotelWrapper px-3">
            <div className="row p-1">
              <div className="col-md-9">
                <h1 className="hotelTitle">
                  {selected_hotel.name
                    ? selected_hotel.name
                    : selected_hotel.hotel_name
                    ? selected_hotel.hotel_name
                    : data.name}
                  {/* {selected_hotel.hotel_name
                ? selected_hotel.hotel_name
                : data.name} */}
                </h1>
                <div className="hotelAddress my-1">
                  <LocationOnIcon className="fs-6" />
                  <span className="">
                    {selected_hotel.country
                      ? selected_hotel.country
                      : selected_hotel.hotel_country
                      ? selected_hotel.hotel_country
                      : data.address}
                  </span>
                  <span className="text-primary fw-bold">
                    {selected_hotel.city
                      ? selected_hotel.city
                      : selected_hotel.hotel_city
                      ? selected_hotel.hotel_city
                      : ""}
                  </span>
                </div>
                <span className="hotelDistance my-1">
                  Excellent location – {data.distance}m from center
                </span>
                <span className="hotelPriceHighlight d-block my-1">
                  Book a stay over ${data.cheapestPrice} at this property and
                  get a free airport taxi
                </span>
              </div>
              <div className="col-md-3 col-sm-6 col-12 text-start mt-1">
                <button
                  className={`btn btn-primary ${
                    isXtraSmallScreen ? "my-1" : ""
                  }`}
                >
                  Reserve or Book Now!
                </button>
              </div>
            </div>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={photo}>
                  <img
                    onClick={() => {
                      if (!isXtraSmallScreen) {
                        window.scrollTo(20, 20);
                        handleOpen(i);
                      }
                    }}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            {/* <div className="d-flex flex-wrap justify-content-start align-items-center">
              {data.facilities.map((item, i) => {
                if (i <= 12)
                  return (
                    <span
                      className="m-2 align-self-stretch text-dark fw-light border border-secondary font-size"
                      key={i}
                    >
                      {item}
                    </span>
                  );
                return null;
              })}
            </div> */}
            {/* <div className="flex-wrap d-flex justify-content-start">
              {data.facilities.map((item, i) => {
                if (i <= 12)
                  return (
                    <span
                      className="m-2 align-self-stretch text-dark fw-light border border-secondary font_size"
                      key={i}
                    >
                      {item}
                    </span>
                  );
                return null;
              })}
            </div> */}

            <div className="shadow p-3 mt-3">
              {/* <div className="row">
                <div className="col-12 mb-2 pb-2 border-bottom">
                  <h5>Enjoy some extra spaces</h5>
                </div>
                <div
                  className="col-6 border-end mt-3"
                  style={{ fontSize: "12px" }}
                >
                  <div>
                    8 ×{" "}
                    <Link to="/" className="fw-semibold">
                      King Room
                    </Link>
                  </div>
                  <div>
                    Price for: <Person />
                    <Person />
                  </div>
                  <div>
                    <b>Each unit has:</b>
                    <br /> Bed: 1 king bed
                  </div>
                  <div className="text-success fw-normal">
                    Free cancellation until 2:00 PM on Feb 15, 2023
                  </div>
                  <div className="text-success fw-normal">
                    NO PREPAYMENT NEEDED – pay at the property
                  </div>
                  <RestaurantMenuIcon />
                  <span className="ms-2">Breakfast PKR 5,513 (optional)</span>
                </div>

                <div className="col-2 border-end">
                  <div className="fw-bolder fs-5">
                    {selected_hotel.price
                      ? selected_hotel.price + 20
                      : data.price}
                    ${availableParkingSlots ? "+5$" : ""}
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    Includes taxes and fees
                  </div>
                </div>

                <div className="col-4">
                  <small>8 nights, 13 adults, 3 children</small>{" "}
                  <div className="fw-bolder fs-5">
                    {selected_hotel.price
                      ? selected_hotel.price + 20
                      : data.price}
                    ${availableParkingSlots ? "+5$" : ""}
                  </div>
                  <small className="d-block">Includes taxes and fees</small>
                  {availableParkingSlots ? (
                    <small className="d-block">Extra 5$ for parking</small>
                  ) : (
                    ""
                  )}
                  <button className="btn btn-primary mt-3 w-100 mb-2">
                    Reserve your selection
                  </button>
                  <div style={{ fontSize: "12px" }}>
                    Don't worry – clicking this button won't charge you
                    anything!
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div className="col-12 mb-2 pb-2 border-bottom">
                  <h5>Enjoy some extra spaces</h5>
                </div>
                <div className="col-md-6 mb-3 border-end">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="fw-bold">
                        8 ×{" "}
                        <a href="/" className="fw-bold">
                          King Room
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          Price for:{" "}
                          <span className="mx-1">
                            <i className="fas fa-user"></i>
                          </span>
                          <span className="mx-1">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div>
                        <b>Each unit has:</b>
                        <br />
                        Bed: 1 king bed
                      </div>
                      <div className="text-success mt-3">
                        Free cancellation until 2:00 PM on Feb 15, 2023
                      </div>
                      <div className="text-success">
                        NO PREPAYMENT NEEDED – pay at the property
                      </div>
                      <div className="mt-3">
                        <i className="fas fa-utensils"></i>
                        <span className="ms-2">
                          Breakfast PKR 5,513 (optional)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-2 border-end ${
                    isXtraSmallScreen ? "d-none" : ""
                  }`}
                >
                  <div className="d-flex flex-column align-items-start">
                    <div className="fw-bold fs-5">
                      $
                      {selected_hotel.price
                        ? selected_hotel.price + 20
                        : data.price}
                    </div>
                    <div className="mt-2" style={{ fontSize: "12px" }}>
                      Includes taxes and fees
                    </div>
                  </div>
                </div>
                <div className={`col-md-4 ${isXtraSmallScreen ? "mt-0" : ""}`}>
                  <div className="d-flex flex-column align-items-start">
                    <div className="mt-3" style={{ fontSize: "12px" }}>
                      8 nights, 13 adults, 3 children
                    </div>
                    <div className="fw-bold fs-5">
                      $
                      {selected_hotel.price
                        ? selected_hotel.price + 20
                        : data.price}
                    </div>
                    <div className="mt-2" style={{ fontSize: "12px" }}>
                      Includes taxes and fees
                    </div>
                    {availableParkingSlots ? (
                      <div className="mt-2" style={{ fontSize: "12px" }}>
                        Extra 5$ for parking
                      </div>
                    ) : (
                      ""
                    )}
                    <button className="btn btn-primary btn-block mt-3 mb-2">
                      Reserve your selection
                    </button>
                    <div className="mt-2" style={{ fontSize: "12px" }}>
                      Don't worry – clicking this button won't charge you
                      anything!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hotelDetails">
              {/* <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">
                  {selected_hotel ? selected_hotel.name : data.title}
                </h1>
                <p className="hotelDesc text-dark fs-6 fw-light">
                  {selected_hotel ? selected_hotel.description : data.desc}
                </p>
                <div>
                  <h5 className="my-3">Most popular facilities</h5>
                  <div className="d-flex flex-wrap text-success">
                    {data.facilities.map((item, i) => {
                      {
                        if (i <= limit)
                          return (
                            <>
                              <div key={i}>
                                <div
                                  className={`bg-info text-light px-2 py-1 me-3 mb-2 rounded-pill`}
                                >
                                  {item}
                                </div>
                              </div>
                            </>
                          );
                      }
                    })}

                    {limit < data.facilities.length && (
                      <div
                        onClick={handleSeemore}
                        className="my-auto text-info text-decoration-underline cursor_pointer"
                      >
                        See More
                      </div>
                    )}

                    {limit === data.facilities.length && (
                      <div
                        onClick={handleSeemore}
                        className="my-auto text-info text-decoration-underline cursor_pointer"
                      >
                        See Less
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">
                  {selected_hotel ? selected_hotel.name : data.title}
                </h1>
                <p className="hotelDesc text-dark fs-6 fw-light">
                  {selected_hotel ? selected_hotel.description : data.desc}
                </p>
                <div>
                  <h5 className="my-3">Most popular facilities</h5>
                  <div className="d-flex flex-wrap text-success">
                    {data.facilities.map((item, i) => {
                      {
                        if (i <= limit)
                          return (
                            <>
                              <div key={i}>
                                <div
                                  className={`bg-info text-light py-1 mb-2 rounded-pill me-3 px-2 fs-6`}
                                >
                                  {item}
                                </div>
                              </div>
                            </>
                          );
                      }
                    })}

                    {limit < data.facilities.length && (
                      <div
                        onClick={handleSeemore}
                        className="my-auto text-info text-decoration-underline cursor_pointer"
                      >
                        See More
                      </div>
                    )}

                    {limit === data.facilities.length && (
                      <div
                        onClick={handleSeemore}
                        className="my-auto text-info text-decoration-underline cursor_pointer"
                      >
                        See Less
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="hotelDetailsPrice">
                {/* <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button> */}
                <div className="fw-bold">Property Highlights</div>
                <div className="fw-bold">Perfect for an 8-night stay!</div>
                <div style={{ fontSize: "12px" }}>
                  <ul>
                    <li className="mb-1 d-flex">
                      <LocationOnOutlinedIcon className="me-1" />
                      Located in the heart of London, this hotel has an
                      excellent location score of 9.6
                    </li>
                    <li className="mb-1 d-flex">
                      <BedIcon className="me-1" />
                      Want a great night's sleep? This hotel was highly-rated
                      for its very comfy beds.
                    </li>
                    <li className="mb-1 d-flex">
                      <Diversity1TwoToneIcon className="me-1" />
                      Top pick by families with children
                    </li>
                  </ul>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="fw-bold mb-1">Breakfast</div>
                  <div className="d-flex">
                    <RestaurantMenuIcon />
                    Info Continental, Buffet
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="fw-bold mb-1">Rooms with:</div>
                  <div className="d-flex">
                    <ApartmentIcon />
                    City view
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="fw-bold mb-1">Loyal Customers</div>
                  <div className="d-flex">
                    <DoneIcon />
                    There are more repeat guests here than most other
                    properties.
                  </div>
                </div>
                <button className="btn btn-primary">
                  Reserve for 13 adults,3 children{" "}
                  <small className="fw-light">(for pkr 4,162,112)</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="row">
        {room_data.map((item) => {
          return (
            <Roomcard
              data={item}
              hotel={
                selected_hotel.name
                  ? selected_hotel.name
                  : selected_hotel.hotel_name
                  ? selected_hotel.hotel_name
                  : data.title
              }
              key={item.name}
            />
          );
        })}
      </div> */}
      <Footer />
    </div>
  );
};

export default Hotel;
