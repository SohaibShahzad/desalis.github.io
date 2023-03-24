import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import SellIcon from "@mui/icons-material/Sell";
import PauseIcon from "@mui/icons-material/Pause";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

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
    icon: <PersonIcon />,
    link: "/Profile",
  },
  {
    key: 3,
    title: "Wholesellers",
    icon: <SellIcon />,
    link: "/Wholeseller",
  },
  {
    key: 4,
    title: "Retailers",
    icon: <SellIcon />,
    link: "/Retailer",
  },
  {
    key: "a",
    title: "Businesses",
    icon: <BusinessCenterIcon />,
    link: "/Business",
  },
];

export const SidebarDataAdminOrders = [
  {
    key: 5,
    title: "Wholesale",
    icon: <StorefrontIcon />,
    link: "/Login",
  },
  {
    key: 6,
    title: "Dropship",
    icon: <StorefrontIcon />,
    link: "/Profile",
  },
];

//For WholeSaler
export const SidebarDataWholesellerProfile = [
  {
    key: 7,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/Dashboard",
  },
  {
    key: 8,
    title: "Profile",
    icon: <PersonIcon />,
    link: "/Profile",
  },
  {
    key: 9,
    title: "Business Details",
    icon: <AccountBalanceWalletIcon />,
    link: "/WholesellerBusinessDetail",
  },
  // {
  //   key: 10,
  //   title: "Uploads",
  //   icon: <DriveFolderUploadIcon />,
  //   link: "/oq",
  // },
];

export const SidebarDataWholesellerOrders = [
  {
    key: 11,
    title: "Wholesale",
    icon: <StorefrontIcon />,
    link: "/gin",
  },
  {
    key: 12,
    title: "Dropship",
    icon: <StorefrontIcon />,
    link: "/file",
  },
];

//For retailer
export const SidebarDataRetailerProfile = [
  {
    key: 13,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/Dashboard",
  },
  { key: 14, title: "Profile", icon: <PersonIcon />, link: "/Profile" },
  {
    key: 15,
    title: "Account",
    icon: <AccountBalanceWalletIcon />,
    link: "/jkj",
  },
];

export const SidebarDataRetailerOrders = [
  {
    key: 16,
    title: "Placed orders",
    icon: <ShoppingCartIcon />,
    link: "/Ln",
  },
  {
    key: 17,
    title: "Pending orders",
    icon: <PauseIcon />,
    link: "/Pre",
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
