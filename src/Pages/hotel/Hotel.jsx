import "./hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext, useState } from "react";
// import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
// import { AuthContext } from "../../context/AuthContext";
// import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const data = {
    name: "Hotel Pod Roza",
    address: "ul. Floriańska 1, 31-005 Kraków, Poland",
    distance: "0.1",
    cheapestPrice: "100",
    photos: [],
    title: "Hotel Pod Roza",
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
  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      {false ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <CloseIcon className="close" onClick={() => setOpen(false)} />
              <ArrowBackIosNewIcon
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <ArrowForwardIosNewIcon
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <LocationOnIcon />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="flex-wrap d-flex justify-content-start">
              {data.facilities.map((item, i) => {
                if (i <= 12)
                  return (
                    <span className="m-2 align-self-stretch text-dark fw-light border border-secondary font_size">
                      {item}
                    </span>
                  );
              })}
            </div>

            <div className="row">
              <div className="col-6 col-md-6 col-sm-10">

              </div>
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc text-dark fs-6 fw-light">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                {/* <h1>Perfect for a {days}-night stay!</h1> */}
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  {/* <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights) */}
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} */}
    </div>
  );
};

export default Hotel;
