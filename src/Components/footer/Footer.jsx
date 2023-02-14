import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`container ${style.footer}`}>
      <div className={style.fLists}>
        <ul className={style.fList}>
          <li className={style.fListItem}>
            <Link to='/' >Countries</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Regions</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Cities</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Districts</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Airports</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Hotels</Link>
          </li>
        </ul>
        <ul className={style.fList}>
          <li className={style.fListItem}>
            <Link to='/' >Home</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Apartments</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Resorts</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Villas</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Hostels</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Guest houses</Link>
          </li>
        </ul>
        <ul className={style.fList}>
          <li className={style.fListItem}>
            <Link to='/' >Unique places to stay</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Reviews</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Unpacked : Travel articles </Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Travel communities</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Seasonal and holiday deals</Link>
          </li>
        </ul>
        <ul className={style.fList}>
          <li className={style.fListItem}>
            <Link to='/' >Car rental</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Flight Finder</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Restaurant reservations</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Travel Agents</Link>
          </li>
        </ul>
        <ul className={style.fList}>
          <li className={style.fListItem}>
            <Link to='/' >Curtomer Service</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/contact' >Contact Us</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Careers</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Sustainability</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Press center</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Safety Resource Center</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Investor relations</Link>
          </li>
          <li className={style.fListItem}>
            <Link to='/' >Terms & conditions</Link>
          </li>
        </ul>
      </div>
      <div className={style.fText}>Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;








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
