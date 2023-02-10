import style from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import $ from "jquery";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Dates from "../date/Date";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const data = [
    {
      name: "Hotels",
      img: "",
    },
    {
      name: "Apartments",
      img: "",
    },
    {
      name: "Villas",
      img: "",
    },
    {
      name: "Hostels",
      img: "",
    },
    {
      name: "Resorts",
      img: "",
    },
  ];

  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState(0);

  useEffect(() => {
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      // console.log(scroll);
      let box = $(`.${style.header_text}`).height();
      // console.log(box)
      let header = $("header").height();
      console.log(header);

      if (scroll > box - header) {
        // console.log(box);
        // console.log(header);
        // console.log(box - header, scroll);
        $("header").addClass(`${style.background_header}`);
        // console.log("if");
      } else {
        // console.log("else");
        $("header").removeClass(`${style.background_header}`);
      }
    });
  }, []);
  return (
    <>
      <header
        className={`${style.header_area} ${style.header_sticky} ${style.wow} ${style.slideInDown}`}
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className={style.main_nav}>
                <a href="index.html" className={style.logo}></a>
                <ul className={style.nav}>
                  <li>
                    <Link to="/" className="active">
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link to="/parking">Parkings</Link>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <Link to="/">
                          <span className={style.iconShow}>
                            <Badge
                              color="secondary"
                              badgeContent={100}
                              max={999}
                            >
                              <MailIcon />
                            </Badge>
                          </span>
                          <span className={style.iconHide}>Messages</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className={style.iconShow}>
                            <Badge
                              color="secondary"
                              badgeContent={1000}
                              max={999}
                            >
                              <NotificationsIcon />
                            </Badge>
                          </span>
                          <span className={style.iconHide}>Notifications</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className={style.iconShow}>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                          </span>
                          <span className={style.iconHide}>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <LogoutIcon /> Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      {" "}
                      <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                      </li>
                      <li>
                        <NavLink to="/signin">Sign In</NavLink>
                      </li>
                    </>
                  )}

                  <li>
                    <div className={style.main_white_button}>
                      <Link to="/addProperty">
                        <AddIcon /> Add Your Property
                      </Link>
                    </div>
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

      <div className={style.main_banner}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${style.top_text} ${style.header_text}`}>
                <h6>Over 36,500+ Active Listings</h6>
                <h2>Find Nearby Places &amp; Things</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <form
                id={style.search_form}
                name="gs"
                method="submit"
                role="search"
                action="#"
              >
                <div className="row position-relative">
                  <div className="col-lg-3 align-self-center">
                    <fieldset className="d-flex align-items-center">
                      <HotelIcon className=" me-2" />
                      <input
                        type="text"
                        name="city"
                        className={style.form_select}
                        placeholder="Enter your city"
                        autoComplete="off"
                        required
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-3 align-self-center">
                    <fieldset className="d-flex align-items-center">
                      <CalendarMonthIcon className=" me-2" />
                      <Dates />
                    </fieldset>
                  </div>
                  <div className="col-lg-3 align-self-center position-relative">
                    <fieldset className="d-flex align-items-center">
                      <PersonIcon className=" me-2" />
                      <input
                        name="persons"
                        className={style.form_select}
                        type="number"
                        placeholder="Enter number of persons"
                        id={style.chooseCategory}
                        required
                        onChange={(e) => setOptions(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-3">
                    <fieldset>
                      <button className={style.main_button}>
                        <SearchIcon /> Search Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <ul className={style.categories}>
                {data.map((item, index) => {
                  return (
                    <li key={item.index}>
                      <Link to="category.html">
                        <span className={style.icon}>
                          <img src={item.img} alt={item.name} />
                        </span>{" "}
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
