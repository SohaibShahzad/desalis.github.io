import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { Hotel } from "@mui/icons-material";

//For admin
export const SidebarDataAdminProfile = [
  {
    key: 1,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/Dashboard",
  },
  {
    key: 2,
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/Profile",
  },
  {
    key: 3,
    title: "Users",
    icon: <PersonIcon />,
    link: "/UsersList",
  },
  {
    key: 4,
    title: "Hotels",
    icon: <Hotel />,
    link: "/HotelsList",
  },
  {
    key: 11,
    title: "Pending Requests",
    icon: <PendingIcon  />,
    link: "/HotelList",
  },
  {
    key: "a",
    title: "Bookings",
    icon: <BusinessCenterIcon />,
    link: "/Booking",
  },
];

//For Patner
export const SidebarDataPatnerProfile = [
  {
    key: 7,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/Dashboard",
  },
  {
    key: 8,
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/Profile",
  },
  {
    key: 9,
    title: "Users",
    icon: <PersonIcon />,
    link: "/UsersList",
  },
  {
    key: 10,
    title: "Hotel",
    icon: <HomeIcon />,
    link: "/HotelList",
  },
  {
    key: "12",
    title: "Bookings",
    icon: <BusinessCenterIcon />,
    link: "/BookingsList",
  },
  // {
  //   key: 10,
  //   title: "Uploads",
  //   icon: <DriveFolderUploadIcon />,
  //   link: "/oq",
  // },
];

//For User
export const SidebarDataUserProfile = [
  {
    key: 13,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/Dashboard",
  },
  { key: 14, title: "Profile", icon: <AccountCircleIcon />, link: "/Profile" },
  {
    key: 15,
    title: "My Bookings",
    icon: <BusinessCenterIcon />,
    link: "/BookingsList",
  },
];

//For All
export const SidebarDataLogout = [
  {
    key: 18,
    title: "Logout",
    icon: <LogoutIcon />,
  },
];
