import style from "./footer.module.css";
import { Link } from "react-router-dom";
import MailList from "../mailList/MailList";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const isXtraSmallScreen = useMediaQuery("(max-width:400px)");

  return (
    <footer
      className="pt-4 pb-4 text-white custom-footer"
      style={{ backgroundColor: "#003580", marginTop: "25px" }}
    >
      <div className="container text-md-left">
        <div
          className={`row  ${
            isXtraSmallScreen ? "text-center" : "text-start"
          } text-md-left justify-content-center`}
        >
          <div className="col-lg-3 my-1 col-md-6 col-sm-4 col-4">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Countries</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Regions</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Cities</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Districts</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Airports</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Hotels</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-1 col-md-6 col-sm-4 col-4">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Apartments</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Resorts</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Villas</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Hostels</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Guest houses</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-1 col-md-6 col-sm-4 col-4">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Unique places</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Reviews</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Travel articles </Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Travel Communities</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Deals</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-1 text-center col-md-6 col-sm-12 col-12">
            <MailList />
          </div>
          <hr className="mt-1" />
          <div className="row align-items-center">
            <div className="text-center">Copyright © 2022 Lamabooking.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div style={{ backgroundColor: "#003580", marginTop: "25px" }}>
      <div className={`pt-5 ${style.footer}`}>
        <div className={`row  ${style.fLists}`}>
          <div className="col-lg-3 my-2 col-md-6 col-sm-4 ">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Countries</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Regions</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Cities</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Districts</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Airports</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Hotels</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-2 col-md-6 col-sm-4 ">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Apartments</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Resorts</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Villas</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Hostels</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Guest houses</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-2 col-md-6 col-sm-4 ">
            <ul className={style.fList}>
              <li className={style.fListItem}>
                <Link to="/">Unique places to stay</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Reviews</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Unpacked : Travel articles </Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Travel communities</Link>
              </li>
              <li className={style.fListItem}>
                <Link to="/">Seasonal and holiday deals</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-2 col-md-6 col-sm-12 ">
            <MailList />
          </div>
        </div>
      </div>
      <div className={`${style.fText}`}>Copyright © 2022 Lamabooking.</div>
    </div> */
}
// import style from "./footer.module.css";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className={`container ${style.footer}`}>
//       <div className={style.fLists}>
//         <ul className={style.fList}>
//           <li className={style.fListItem}> <Link to='/'  to='/'>Countries</Link></li>
//           <li className={style.fListItem}>Regions</li>
//           <li className={style.fListItem}>Cities</li>
//           <li className={style.fListItem}>Districts</li>
//           <li className={style.fListItem}>Airports</li>
//           <li className={style.fListItem}>Hotels</li>
//         </ul>
//         <ul className={style.fList}>
//           <li className={style.fListItem}>Homes </li>
//           <li className={style.fListItem}>Apartments </li>
//           <li className={style.fListItem}>Resorts </li>
//           <li className={style.fListItem}>Villas</li>
//           <li className={style.fListItem}>Hostels</li>
//           <li className={style.fListItem}>Guest houses</li>
//         </ul>
//         <ul className={style.fList}>
//           <li className={style.fListItem}>Unique places to stay </li>
//           <li className={style.fListItem}>Reviews</li>
//           <li className={style.fListItem}>Unpacked: Travel articles </li>
//           <li className={style.fListItem}>Travel communities </li>
//           <li className={style.fListItem}>Seasonal and holiday deals </li>
//         </ul>
//         <ul className={style.fList}>
//           <li className={style.fListItem}>Car rental </li>
//           <li className={style.fListItem}>Flight Finder</li>
//           <li className={style.fListItem}>Restaurant reservations </li>
//           <li className={style.fListItem}>Travel Agents </li>
//         </ul>
//         <ul className={style.fList}>
//           <li className={style.fListItem}>Curtomer Service</li>
//           <li className={style.fListItem}>Partner Help</li>
//           <li className={style.fListItem}>Careers</li>
//           <li className={style.fListItem}>Sustainability</li>
//           <li className={style.fListItem}>Press center</li>
//           <li className={style.fListItem}>Safety Resource Center</li>
//           <li className={style.fListItem}>Investor relations</li>
//           <li className={style.fListItem}>Terms & conditions</li>
//         </ul>
//       </div>
//       <div className={style.fText}>Copyright © 2022 Lamabooking.</div>
//     </div>
//   );
// };

// export default Footer;
// const isSmallScreen = useMediaQuery("(max-width:600px)");
//   const isMediumScreen = useMediaQuery(
//     "(min-width:601px) and (max-width:960px)"
//   );
//   const isLargeScreen = useMediaQuery("(min-width:961px)");
