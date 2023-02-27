import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import ParkingDate from "../DateForPaking/ParkingDate";
import Dates from "../date/Date";
import Dropdown from "../dropdown/Dropdown";
import hotel from "../../images/hotel-bg.jpg";
import hotelparking from "../../images/hotelparking-bg.jpg";
import parking from "../../images/parking-bg.jpg";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import bgrmvblk from "../../images/bgrmvblk.png";

const Navbar = ({ list }) => {
  // Popover Material UI Code
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const id = open ? "simple-popover" : undefined;
  const id1 = open1 ? "simple-popover" : undefined;
  // Popover Material UI Code
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.searchCity);
  const { cityParking } = useSelector((state) => state.searchParkingCity);
  // const { seacrhLoc } = useSelector((state) => state.getSearchLocation);
  const { cityHotelAndParking } = useSelector(
    (state) => state.searchHotelAndParkingCity
  );
  const { dates } = useSelector((state) => state.searchDate);
  const datesParking = useSelector((state) => state.searchParkingDate.dates);
  const { resultPerson } = useSelector((state) => state.personAlert);
  const { resultCity } = useSelector((state) => state.cityAlert);
  const { resultVehicle } = useSelector((state) => state.vehicleAlert);
  const { resultDate } = useSelector((state) => state.dateAlert);
  const { resultDateTime } = useSelector((state) => state.dateTimeAlert);
  const { c } = useSelector((state) => state.searchVehicle);
  const location = useLocation();
  const path = location.pathname;
  const [navSearch, setNavSearch] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const { options } = useSelector((state) => state.searchOption);
  const [option, setOption] = useState(options);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();

  // get location of user
  const { user } = useSelector((state) => state.user);
  if (navSearch) {
    dispatch({
      type: "setUserLocation",
      payload: "hotel",
    });
  } else if (nav2) {
    dispatch({
      type: "setUserLocation",
      payload: "hotelAndParking",
    });
  }

  const validRoom = () => {
    const numOfPerson = options.adult + option.children;
    const totalSingleRoomCapacity = option.singleRoom;
    const totalTwinRoomCapacity = option.twinRoom * 2;
    const totalfamilyRoomCapacity = option.familyRoom * 5;
    const totalRoomCapacity =
      totalSingleRoomCapacity + totalTwinRoomCapacity + totalfamilyRoomCapacity;
    if (numOfPerson > totalRoomCapacity) {
      return true;
    }
    return false;
  };

  const handleOnSearch = () => {
    dispatch({
      type: "ALERTPERSON",
      payload: validRoom(),
    });

    if (
      (city === "" && path === "/") ||
      (cityParking === "" && path === "/parking") ||
      (cityHotelAndParking === "" && path === "/hotelAndParking")
    ) {
      dispatch({
        type: "ALERTCITY",
        payload: true,
      });
    } else {
      dispatch({
        type: "ALERTCITY",
        payload: false,
      });
    }

    if (path !== "/" && c === "") {
      dispatch({
        type: "ALERTVEHICLE",
        payload: true,
      });
    } else {
      dispatch({
        type: "ALERTVEHICLE",
        payload: false,
      });
    }

    if (dates[0] === undefined || dates[1] === undefined) {
      dispatch({
        type: "ALERTDATE",
        payload: true,
      });
    } else {
      dispatch({
        type: "ALERTDATE",
        payload: false,
      });
    }

    if (datesParking[0] === undefined || datesParking[1] === undefined) {
      dispatch({
        type: "ALERTDATE",
        payload: true,
      });
    } else {
      dispatch({
        type: "ALERTDATE",
        payload: false,
      });
    }

    if (city === "" || dates[0] === undefined || dates[1] === undefined) {
      // alert("Please fill all the fields");
      return;
    }

    if (option) {
      dispatch({
        type: "SET_OPTION",
        payload: option,
      });
    }

    navSearch
      ? navigate(`/listHotel`)
      : nav2
      ? navigate("/listHotel")
      : navigate(`/ParkingList`);
  };

  useEffect(() => {
    if (path === "/") {
      setNavSearch(true);
    } else if (path === "/HotelAndParking") {
      setNav2(true);
    } else {
      setNav2(false);
      setNavSearch(false);
    }

    if (path === "/" || path === "/HotelAndParking") {
      setOption({
        adult: 1,
        children: 0,
        singleRoom: 1,
        twinRoom: 0,
        familyRoom: 0,
      });
      dispatch({
        type: "SET_DATE",
        payload: [],
      });
      dispatch({
        type: "SET_CITY",
        payload: "",
      });
    }
    dispatch({
      type: "INCREMENT",
      payload: "",
    });
    dispatch({
      type: "ALERTPERSON",
      payload: false,
    });

    dispatch({
      type: "ALERTCITY",
      payload: false,
    });

    dispatch({
      type: "ALERTVEHICLE",
      payload: false,
    });

    dispatch({
      type: "ALERTDATE",
      payload: false,
    });

    dispatch({
      type: "ALERTDATETIME",
      payload: false,
    });

    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    dispatch({
      type: "SET_OPTION",
      payload: option,
    });
  }, [option]);

  useEffect(() => {
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      let box = $(`.${style.header_text}`).height();
      let header = $("header").height();
      if (scroll > box - header) {
        $("header").addClass(`${style.background_header}`);
        $("li a").removeClass(`${style.text_shadow}`);
      } else {
        $("li a").addClass(`${style.text_shadow}`);
        $("header").removeClass(`${style.background_header}`);
      }
    });
  }, []);

  // const location = window.location.pathname;
  // const dispatch = useDispatch();
  // if (location === "/") {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: true,
  //   });
  // } else {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: false,
  //   });
  // }
  // const { c } = useSelector((state) => state.navOpen);

  return (
    <div className="w-100">
      <header
        className={`${style.header_area} ${style.header_sticky} ${style.wow} ${
          style.slideInDown
        } ${!list ? "bg-primary position-static" : ""}`}
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="Container pe-2">
          <div className="row">
            <div className="col-12">
              <nav className={style.main_nav}>
                <Link to="/" className={style.logo}>
                  <img
                    alt="logo"
                    style={{ width: "100%", height: "100%" }}
                    src={bgrmvblk}
                  />
                </Link>
                <ul className={style.nav}>
                  <li>
                    <NavLink to="/" className={`${style.text_shadow}`}>
                      Hotels
                      <hr
                        className={`mt-0 ${style.activeTab} ${
                          navSearch ? "d-block" : "d-none"
                        }`}
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/parking" className={style.text_shadow}>
                      Parkings
                      <hr
                        className={`mt-0 ${style.activeTab} ${
                          !navSearch && !nav2 ? "d-block" : "d-none"
                        }`}
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/HotelAndParking"
                      className={style.text_shadow}
                    >
                      Hotel and Parking
                      <hr
                        className={`mt-0 ${style.activeTab} ${
                          nav2 ? "d-block" : "d-none"
                        }`}
                      />
                    </NavLink>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Badge color="primary" badgeContent={100} max={999}>
                              <MailIcon
                                aria-describedby={id}
                                variant="contained"
                                onClick={handleClick}
                              />
                            </Badge>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                            >
                              <Typography sx={{ p: 2 }}>
                                The content of the Popover.
                                <h4>Hello World</h4>
                              </Typography>
                            </Popover>
                          </span>
                          <span className={style.iconHide}>
                            <Button
                              className={style.iconHide}
                              sx={{ color: "#191a20" }}
                              aria-describedby={id}
                              // variant="contained"
                              onClick={handleClick}
                            >
                              Messages
                            </Button>
                            {/* Messages */}
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Badge
                              color="primary"
                              badgeContent={1000}
                              max={999}
                            >
                              <NotificationsIcon
                                aria-describedby={id1}
                                variant="contained"
                                onClick={handleClick1}
                              />
                            </Badge>
                            <Popover
                              id={id1}
                              open={open1}
                              anchorEl={anchorEl1}
                              onClose={handleClose1}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                            >
                              <Typography sx={{ p: 2 }}>
                                The content of the Popover.1
                                <h4>Hello World 1</h4>
                              </Typography>
                            </Popover>
                          </span>
                          <span className={style.iconHide}>
                            <Button
                              className={style.iconHide}
                              sx={{ color: "#191a20" }}
                              aria-describedby={id1}
                              // variant="contained"
                              onClick={handleClick1}
                            >
                              Notifications
                            </Button>
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                          </span>
                          <span className={style.iconHide}>Profile</span>
                        </NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/">
                          <LogoutIcon /> Logout
                        </NavLink>
                      </li> */}
                    </>
                  ) : (
                    <>
                      {" "}
                      <li>
                        <NavLink to="/signup" className={style.text_shadow}>
                          Sign Up
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/signin" className={style.text_shadow}>
                          Sign In
                        </NavLink>
                      </li>
                    </>
                  )}

                  <li>
                    <span className={style.main_white_button}>
                      <NavLink to="/listproperty">
                        <AddIcon /> Add Your Property
                      </NavLink>
                    </span>
                  </li>
                </ul>
                <a
                  className={`${style.menu_trigger} ${
                    menuOpen ? style.active : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    $(`.${style.header_area} .${style.nav}`).slideToggle(200);
                  }}
                >
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {list && (
        <>
          <div
            className={style.main_banner}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(239, 243, 247,0.1), rgb(239, 243, 247,0.2)),url(${
                navSearch ? hotel : nav2 ? hotelparking : parking
              })`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`${style.top_text} ${style.header_text}`}>
                    <h4 className={style.text_shadow}>
                      Over 36,500+ Active Listings
                    </h4>
                    <h2 className={style.text_shadow}>
                      Find Nearby Places &amp; Things
                    </h2>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={` ${style.search_form}`}>
                    <div className="row position-relative">
                      <div className={`col-lg-2 align-self-center`}>
                        {navSearch ? (
                          <fieldset className="d-flex align-items-center">
                            <HotelIcon className=" me-2" />
                            <Dropdown name="cityHotel" />
                          </fieldset>
                        ) : nav2 ? (
                          <fieldset className="d-flex align-items-center">
                            <HotelIcon className=" me-2" />
                            <Dropdown name="cityHotelAndParking" />
                          </fieldset>
                        ) : (
                          <fieldset className="d-flex align-items-center">
                            <DirectionsCarIcon className=" me-2" />
                            <Dropdown name="cityParking" />
                          </fieldset>
                        )}
                      </div>
                      <div
                        className={`${
                          nav2 ? "col-lg-3" : "col-lg-4"
                        } align-self-center`}
                      >
                        <fieldset className="d-flex align-items-center">
                          <CalendarMonthIcon className=" me-2" />
                          {navSearch ? (
                            <Dates />
                          ) : nav2 ? (
                            <Dates />
                          ) : (
                            <ParkingDate />
                          )}
                        </fieldset>
                      </div>
                      <div
                        className={`${
                          nav2
                            ? "col-lg-5"
                            : navSearch
                            ? "col-lg-4"
                            : "col-lg-3"
                        } align-self-center position-relative`}
                      >
                        {navSearch ? (
                          <fieldset className="d-flex align-items-center">
                            <PersonIcon className=" me-2" />
                            <span
                              onClick={() => {
                                setOpenOptions(!openOptions);
                                dispatch({
                                  type: "ALERTPERSON",
                                  payload: false,
                                });
                              }}
                              className={`d-flex ${style.headerSearchText}`}
                            >
                              {`${options.adult} adult · ${
                                options.children
                              } children · ${
                                options.singleRoom +
                                options.twinRoom +
                                options.familyRoom
                              } room`}
                              <div className="ms-3 text-dark">
                                {openOptions ? (
                                  <ExpandLessIcon />
                                ) : (
                                  <ExpandMoreIcon />
                                )}
                              </div>
                            </span>
                            {openOptions && (
                              <div className={`shadow-lg ${style.options}`}>
                                <div className={style.optionItem}>
                                  <span className={style.optionText}>
                                    Adult
                                  </span>
                                  <div className={style.optionCounter}>
                                    <button
                                      disabled={options.adult <= 1}
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() => handleOption("adult", "d")}
                                    >
                                      <RemoveIcon />
                                    </button>
                                    <span className={style.optionCounterNumber}>
                                      {options.adult}
                                    </span>
                                    <button
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() => handleOption("adult", "i")}
                                    >
                                      <AddIcon />
                                    </button>
                                  </div>
                                </div>
                                <div className={style.optionItem}>
                                  <span className={style.optionText}>
                                    Children
                                  </span>
                                  <div className={style.optionCounter}>
                                    <button
                                      disabled={options.children <= 0}
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("children", "d")
                                      }
                                    >
                                      <RemoveIcon />
                                    </button>
                                    <span className={style.optionCounterNumber}>
                                      {options.children}
                                    </span>
                                    <button
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("children", "i")
                                      }
                                    >
                                      <AddIcon />
                                    </button>
                                  </div>
                                </div>
                                <div className={style.optionItem}>
                                  <span className={style.optionText}>
                                    Single Room
                                  </span>
                                  <div className={style.optionCounter}>
                                    <button
                                      disabled={options.singleRoom <= 0}
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("singleRoom", "d")
                                      }
                                    >
                                      <RemoveIcon />
                                    </button>
                                    <span className={style.optionCounterNumber}>
                                      {options.singleRoom}
                                    </span>
                                    <button
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("singleRoom", "i")
                                      }
                                    >
                                      <AddIcon />
                                    </button>
                                  </div>
                                </div>
                                <div className={style.optionItem}>
                                  <span className={style.optionText}>
                                    Twin Room
                                  </span>
                                  <div className={style.optionCounter}>
                                    <button
                                      disabled={options.twinRoom <= 0}
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("twinRoom", "d")
                                      }
                                    >
                                      <RemoveIcon />
                                    </button>
                                    <span className={style.optionCounterNumber}>
                                      {options.twinRoom}
                                    </span>
                                    <button
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("twinRoom", "i")
                                      }
                                    >
                                      <AddIcon />
                                    </button>
                                  </div>
                                </div>
                                <div className={style.optionItem}>
                                  <span className={style.optionText}>
                                    Family Room
                                  </span>
                                  <div className={style.optionCounter}>
                                    <button
                                      disabled={options.familyRoom <= 0}
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("familyRoom", "d")
                                      }
                                    >
                                      <RemoveIcon />
                                    </button>
                                    <span className={style.optionCounterNumber}>
                                      {options.familyRoom}
                                    </span>
                                    <button
                                      className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                      onClick={() =>
                                        handleOption("familyRoom", "i")
                                      }
                                    >
                                      <AddIcon />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </fieldset>
                        ) : nav2 ? (
                          <div className="d-flex justify-content-between">
                            <fieldset className="container d-flex align-items-center">
                              <PersonIcon className=" me-2" />
                              <span
                                onClick={() => {
                                  setOpenOptions(!openOptions);
                                  dispatch({
                                    type: "ALERTPERSON",
                                    payload: false,
                                  });
                                }}
                                className={`d-flex ${style.headerSearchText}`}
                              >
                                {`${options.adult} adult · ${
                                  options.children
                                } children · ${
                                  options.singleRoom +
                                  options.twinRoom +
                                  options.familyRoom
                                } room`}
                                <div className="ms-3 text-dark">
                                  {openOptions ? (
                                    <ExpandLessIcon />
                                  ) : (
                                    <ExpandMoreIcon />
                                  )}
                                </div>
                              </span>
                              {openOptions && (
                                <div className={`shadow-lg ${style.options}`}>
                                  <div className={style.optionItem}>
                                    <span className={style.optionText}>
                                      Adult
                                    </span>
                                    <div className={style.optionCounter}>
                                      <button
                                        disabled={options.adult <= 1}
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("adult", "d")
                                        }
                                      >
                                        <RemoveIcon />
                                      </button>
                                      <span
                                        className={style.optionCounterNumber}
                                      >
                                        {options.adult}
                                      </span>
                                      <button
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("adult", "i")
                                        }
                                      >
                                        <AddIcon />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.optionItem}>
                                    <span className={style.optionText}>
                                      Children
                                    </span>
                                    <div className={style.optionCounter}>
                                      <button
                                        disabled={options.children <= 0}
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("children", "d")
                                        }
                                      >
                                        <RemoveIcon />
                                      </button>
                                      <span
                                        className={style.optionCounterNumber}
                                      >
                                        {options.children}
                                      </span>
                                      <button
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("children", "i")
                                        }
                                      >
                                        <AddIcon />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.optionItem}>
                                    <span className={style.optionText}>
                                      Single Room
                                    </span>
                                    <div className={style.optionCounter}>
                                      <button
                                        disabled={options.singleRoom <= 0}
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("singleRoom", "d")
                                        }
                                      >
                                        <RemoveIcon />
                                      </button>
                                      <span
                                        className={style.optionCounterNumber}
                                      >
                                        {options.singleRoom}
                                      </span>
                                      <button
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("singleRoom", "i")
                                        }
                                      >
                                        <AddIcon />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.optionItem}>
                                    <span className={style.optionText}>
                                      Twin Room
                                    </span>
                                    <div className={style.optionCounter}>
                                      <button
                                        disabled={options.twinRoom <= 0}
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("twinRoom", "d")
                                        }
                                      >
                                        <RemoveIcon />
                                      </button>
                                      <span
                                        className={style.optionCounterNumber}
                                      >
                                        {options.twinRoom}
                                      </span>
                                      <button
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("twinRoom", "i")
                                        }
                                      >
                                        <AddIcon />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.optionItem}>
                                    <span className={style.optionText}>
                                      Family Room
                                    </span>
                                    <div className={style.optionCounter}>
                                      <button
                                        disabled={options.familyRoom <= 0}
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("familyRoom", "d")
                                        }
                                      >
                                        <RemoveIcon />
                                      </button>
                                      <span
                                        className={style.optionCounterNumber}
                                      >
                                        {options.familyRoom}
                                      </span>
                                      <button
                                        className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                        onClick={() =>
                                          handleOption("familyRoom", "i")
                                        }
                                      >
                                        <AddIcon />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </fieldset>
                            <fieldset className="d-flex align-items-center">
                              <LocalParkingIcon className="me-2" />
                              <input
                                type="number"
                                name="vehicle"
                                className={style.form_select}
                                placeholder="Vehicles"
                                autoComplete="off"
                                value={c}
                                // required
                                onChange={(e) =>
                                  dispatch({
                                    type: "INCREMENT",
                                    payload: e.target.value,
                                  })
                                }
                              />
                            </fieldset>
                          </div>
                        ) : (
                          <fieldset className="d-flex align-items-center">
                            <LocalParkingIcon className="me-2" />
                            <input
                              type="number"
                              name="vehicle"
                              className={style.form_select}
                              placeholder="Number of vehicles"
                              autoComplete="off"
                              value={c}
                              // required
                              onChange={(e) =>
                                dispatch({
                                  type: "INCREMENT",
                                  payload: e.target.value,
                                })
                              }
                            />
                          </fieldset>
                        )}
                      </div>
                      <div
                        className={`${
                          nav2 || navSearch ? "col-lg-2" : "col-lg-3"
                        }`}
                      >
                        <fieldset>
                          <button
                            type="submit"
                            className={style.main_button}
                            onClick={handleOnSearch}
                          >
                            <SearchIcon /> Search Now
                          </button>

                          {list &&
                            (resultPerson ||
                              resultCity ||
                              resultVehicle ||
                              resultDate ||
                              resultDateTime) && (
                              <div className="mt-2 start-0 bg-danger bg-opacity-75 text-light rounded-3 p-3 position-absolute">
                                {resultPerson && (
                                  <div>
                                    <strong>Error! </strong>Total number of
                                    persons l capacity of rooms
                                  </div>
                                )}
                                {resultCity && (
                                  <div>
                                    <strong>Error! </strong>Enter city
                                  </div>
                                )}
                                {resultVehicle && (
                                  <div>
                                    <strong>Error! </strong>Enter number of
                                    vehicles
                                  </div>
                                )}
                                {(resultDate || resultDateTime) && (
                                  <div>
                                    <strong>Error! </strong>Enter Date
                                  </div>
                                )}
                              </div>
                            )}
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
