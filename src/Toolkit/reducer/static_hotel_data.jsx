import { createReducer } from "@reduxjs/toolkit";
import hotelPic1 from "../../images/hotelPic1.jpg";
import hotelPic2 from "../../images/hotelPic2.jpg";
import hotelPic3 from "../../images/hotelPic3.jpg";
import hotelPic4 from "../../images/hotelPic4.jpg";
import hotelPic5 from "../../images/hotelPic5.jpg";
import hotelPic6 from "../../images/hotelPic6.jpg";
import hotelPic7 from "../../images/hotelPic7.jpg";
import hotelPic8 from "../../images/hotelPic8.jpg";
import hotelPic9 from "../../images/hotelPic9.jpg";
import hotelPic10 from "../../images/hotelPic10.jpg";
import hotelPic11 from "../../images/hotelPic11.jpg";
import hotelPic12 from "../../images/hotelPic12.jpg";
import hotelPic13 from "../../images/hotelPic13.jpg";
import hotelPic14 from "../../images/hotelPic14.jpg";
import hotelPic15 from "../../images/hotelPic15.jpg";
import hotelPic16 from "../../images/hotelPic16.jpg";
import hotelPic17 from "../../images/hotelPic17.jpg";
import hotelPic18 from "../../images/hotelPic18.jpg";
import hotelPic19 from "../../images/hotelPic19.jpg";
// import hotelPic20 from "../../images/hotelPic20.jpg";
// import hotelPic21 from "../../images/hotelPic21.jpg";
// import hotelPic22 from "../../images/hotelPic22.jpg";
// import hotelPic23 from "../../images/hotelPic23.jpg";
// import hotelPic24 from "../../images/hotelPic24.jpg";
// import hotelPic25 from "../../images/hotelPic25.jpg";

const initialState = {
  hotel_data: [
    {
      rooms: [],
      _id: "63f17acb149e034a91e13df1",
      name: "Lexus Hotels and Resorts",
      title: "hotel",
      rating: 2,
      description: "This is a resort hotel that is located in gilgit",
      pic: hotelPic1,
      price: 25,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",
        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Gilgit Baltistan",
      country: "Pakistan",
      area: "Near Attabad Lake",
      __v: 0,
    },
    {
      rooms: [],
      _id: "63f17afe0f55b3fa208b9ac2",
      name: "North Hill Hotels",
      title: "hotel",
      rating: 3,
      description: "This is a resort hotel",
      pic: hotelPic2,
      price: 23,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",
        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Gilgit Baltistan",
      country: "Pakistan",
      area: "Attabad Lake",
      __v: 0,
    },
    {
      rooms: [],
      _id: "63f17b5b0f55b3fa208b9aca",
      name: "Hotel One",
      title: "hotel",
      rating: 3,
      description: "This is a resort hotel",
      pic: hotelPic3,
      price: 27,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",
        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Gilgit",
      country: "Pakistan",
      area: "Attabad Lake",
      __v: 0,
    },
    {
      rooms: [],
      _id: "63f17c010f55b3fa208b9acf",
      name: "PC Hotels",
      title: "hotel",
      rating: 4,
      description: "This is a resort hotel",
      pic: hotelPic4,
      price: 21,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",
        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Gilgit",
      country: "Pakistan",
      area: "Attabad Lake",
      __v: 0,
    },
    {
      _id: "63f7ec1706dddd31d074054c",
      name: "Shelton's Rezidor Hotel",
      title: "hotel",
      rating: 5,
      description:
        "La Maison d'Eté is set in Poste Lafayette on the Mauritius northeast coast – an area renowned for its tranquillity, luxurious vegetation and hidden coves of unspoilt white-sand beaches fringed with volcanic rock. It’s just 35 minutes’ drive from Port Louis and the resort town of Grand Baie; 30 minutes from île aux Cerfs and the Pamplemousses botanical garden; 15 minutes from Belle Mare’s beaches and four golf courses; five minutes from several kite-surfing hotspots and an hour from the island’s airport.",
      pic: hotelPic5,
      price: 22,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Cannt",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ec5f06dddd31d0740551",
      name: "Hotel Le Meridien",
      title: "hotel",
      rating: 3.5,
      description:
        "Eté is Poste Lafayette on the  – an area renowned for its tranquillity, luxurious vegetation and hidden coves of unspoilt white-sand beaches fringed with volcanic rock. It’s just 35 minutes’ drive from Port Louis and the resort town of Grand Baie; 30 minutes from île aux Cerfs and the Pamplemousses botanical garden; 15 minutes from Belle Mare’s beaches and four golf courses; five minutes from several kite-surfing hotspots and an hour from the island’s airport.",
      pic: hotelPic6,
      price: 20,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "DHA",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ec9006dddd31d0740556",
      name: "Hotel 11",
      title: "hotel",
      rating: 2.5,
      description:
        "30 minutes from île aux Cerfs and the Pamplemousses botanical garden; 15 minutes from Belle Mare’s beaches and four golf courses; five minutes from several kite-surfing hotspots and an hour from the island’s airport.",
      pic: hotelPic7,
      price: 40,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Nishtar Road",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ece806dddd31d074055b",
      name: "Continental Boutique",
      title: "hotel",
      rating: 4.5,
      description:
        "Situated in Islamabad, 7.6 km from Shah Faisal Mosque, Majestic Lodges Guest House Islamabad features accommodation with a garden, free WiFi, a shared kitchen, and a shared lounge. This holiday home offers free private parking and room service.",
      pic: hotelPic8,
      price: 30,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Near Airport",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ed5606dddd31d0740560",
      name: "Centaurus Hotel Suits",
      title: "hotel",
      rating: 5,
      description:
        "Situated in Islamabad, 7.6 km from Shah Faisal Mosque, Majestic Lodges Guest House Islamabad features accommodation with a garden, free WiFi, a shared kitchen, and a shared lounge. This holiday home offers free private parking and room service.",
      pic: hotelPic9,
      price: 43,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Karachi",
      country: "Pakistan",
      address: "Near Sea side",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7eda306dddd31d0740565",
      name: "Royal Galaxy Residence",
      title: "hotel",
      rating: 3.5,
      description:
        "Lake View Park is 20 km from Majestic Lodges Guest House Islamabad, while Ayūb National Park is 23 km from the property. The nearest airport is Islamabad International Airport, 30 km from the holiday home.",
      pic: hotelPic10,
      price: 37,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Walled City Side",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7edd306dddd31d074056a",
      name: "Marriot Hotel",
      title: "hotel",
      rating: 4,
      description:
        "From Majestic Lodges Guest House Islamabad, while Ayūb National Park is 23 km from the property. The nearest airport is Islamabad International Airport, 30 km from the holiday home.",
      pic: hotelPic11,
      price: 23,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Mall Road Lahore",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ee4106dddd31d074056f",
      name: "Grand Taj Hotels",
      title: "hotel",
      rating: 2,
      description:
        "Mauritius – The V&A Hotel Group under the management of Newmark Hotels, Reserves, Lodges and Residences is proud to announce its acquisition of La Maison d’Été Hotel in Mauritius – a luxuriant, hotel beckoning those in search of an opulent tropical escape.",
      pic: hotelPic12,
      price: 28,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Johr Town",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ee6406dddd31d0740574",
      name: "Lexus Resort Hotels",
      title: "hotel",
      rating: 1,
      description:
        "The V&A Hotel Group under the management of Newmark Hotels, Reserves, Lodges and Residences is proud to announce its acquisition of La Maison d’Été Hotel in Mauritius – a luxuriant, hotel beckoning those in search of an opulent tropical escape.",
      pic: hotelPic13,
      price: 55,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Karachi",
      country: "Pakistan",
      address: "Sea Side",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ee8506dddd31d0740579",
      name: "Chalet Hotels",
      title: "hotel",
      rating: 5,
      description:
        "The V&A Hotel Group under the management of Newmark Hotels, Reserves, Lodges and Residences is proud to announce its acquisition of La Maison d’Été Hotel in Mauritius – a luxuriant, hotel beckoning those in search of an opulent tropical escape.",
      pic: hotelPic14,
      price: 25,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Prime City Road",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7eec906dddd31d074057e",
      name: "Viva Pine Hotels",
      title: "hotel",
      rating: 5,
      description:
        "The spice island of Zanzibar has a new and luxurious trump card. Blue Amber redefines premium lifestyle and hospitality on the island, and is the most recent and significant property development of its kind.",
      pic: hotelPic15,
      price: 39,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Muree",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7eef706dddd31d0740583",
      name: "Hikal Hotels",
      title: "hotel",
      rating: 2,
      description:
        "Resort & Villas. With its ethos and long tradition of applying excellence to all its endeavours, Blue Amber adds further kudos to NEWMARK’s meticulously-curated selection of luxury properties.",
      pic: hotelPic16,
      price: 29,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Muree",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ef2106dddd31d0740588",
      name: "The Roomy Lodges",
      title: "hotel",
      rating: 4,
      description:
        "Ribboning along 4 kilometres of magnificent, unspoilt Indian Ocean coastline – and occupying 410 hectares of tropical landscape on the north-eastern side of Zanzibar – Blue Amber will attract property investors and sun seekers from around the globe.",
      pic: hotelPic17,
      price: 19,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Islamabad",
      country: "Pakistan",
      address: "Muree",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7ef8106dddd31d074058d",
      name: "The Signature Hotels",
      title: "hotel",
      rating: 5,
      description:
        "Zanzibar is a year round leisure destination, with endless white cashmere sands and warm cobalt waters. Safe and politically stable, it’s a dream destination for investors wanting to enjoy a tropical island escape at any time of the year. ",
      pic: hotelPic18,
      price: 15,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Dubai Palace Area",
      rooms: [],
      __v: 0,
    },
    {
      _id: "63f7efb706dddd31d0740592",
      name: "The Grand City Hotel",
      title: "hotel",
      rating: 5,
      description:
        "When not in residence, villa owners can enlist NEWMARK to capably oversee and manage their property until their return. NEWMARK offers a fully integrated property management service and can also let properties to screened tenants as part of a rental pool programme. This offers attractive returns to investors. ",
      pic: hotelPic19,
      price: 21,
      photos: [
        "blob:http://localhost:3000/4ddbe6d5-e16b-4435-9aef-900996f59869",

        "blob:http://localhost:3000/fbcfe969-60bf-49ff-b2ca-9e346075a002",
      ],
      city: "Lahore",
      country: "Pakistan",
      address: "Canal View side",
      rooms: [],
      __v: 0,
    },
  ],
};

export const Hotel_Static_Data = createReducer(initialState, {
  sethoteldata: (state, action) => {
    state.hotel_data = action.payload;
  },
});
