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
import parking1 from "../../images/parking1.jpg";
import parking2 from "../../images/parking2.jpg";
import parking3 from "../../images/parking3.jpg";
import parking4 from "../../images/parking4.jpg";
import parking5 from "../../images/parking5.jpg";
import parking6 from "../../images/parking6.jpg";
import parking7 from "../../images/parking7.jpg";
import parking8 from "../../images/parking8.jpg";
import parking9 from "../../images/parking9.jpg";
import parking10 from "../../images/parking10.jpg";
import parking11 from "../../images/parking11.jpg";
import parking12 from "../../images/parking12.jpg";
import parking13 from "../../images/parking13.jpg";
import parking14 from "../../images/parking14.jpg";
import parking15 from "../../images/parking15.jpg";
import parking16 from "../../images/parking16.jpg";

const initialState = {
  hotel_parking_data: [
    {
      hotel_name: "The Ritz Carlton",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience luxury at The Ritz Carlton, offering exquisite accommodations, impeccable service, and breathtaking views.",
      hotel_photo: hotelPic1,
      hotel_city: "New York",
      hotel_country: "USA",
      hotel_address: "50 Central Park S, New York, NY 10019",
      parking_name: "Ritz Carlton Parking",
      parking_title: "parking",
      parking_total_slots: 100,
      parking_booked_slots: 80,
      price: 25,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of The Ritz Carlton.",
      parking_photo: parking1,
    },

    {
      hotel_name: "The Peninsula",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Indulge in unparalleled luxury and personalized service at The Peninsula.",
      hotel_photo: hotelPic2,
      hotel_city: "Paris",
      hotel_country: "France",
      hotel_address: "19 Avenue Kléber, 75116 Paris, France",
      parking_name: "Peninsula Parking",
      parking_title: "parking",
      parking_total_slots: 150,
      parking_booked_slots: 100,
      price: 21,
      parking_description:
        "Our parking facility provides easy and secure parking for guests of The Peninsula.",
      parking_photo: parking2,
    },

    {
      hotel_name: "Mandarin Oriental",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience refined elegance and exceptional service at Mandarin Oriental.",
      hotel_photo: hotelPic3,
      hotel_city: "Tokyo",
      hotel_country: "Japan",
      hotel_address:
        "2-1-1 Nihonbashi Muromachi, Chuo City, Tokyo 103-8328, Japan",
      parking_name: "Mandarin Oriental Parking",
      parking_title: "parking",
      parking_total_slots: 200,
      parking_booked_slots: 150,
      price: 28,
      parking_description:
        "Our parking facility offers convenient and secure parking for guests of Mandarin Oriental.",
      parking_photo: parking3,
    },

    {
      hotel_name: "The Four Seasons",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience ultimate luxury and impeccable service at The Four Seasons.",
      hotel_photo: hotelPic4,
      hotel_city: "Dubai",
      hotel_country: "United Arab Emirates",
      hotel_address: "Jumeirah Beach Rd - Dubai - United Arab Emirates",
      parking_name: "Four Seasons Parking",
      parking_title: "parking",
      parking_total_slots: 300,
      parking_booked_slots: 250,
      price: 29,
      parking_description:
        "Our parking facility offers secure and convenient parking for guests of The Four Seasons.",
      parking_photo: parking4,
    },
    {
      hotel_name: "Belmond Hotel Caruso",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Enjoy breathtaking views and impeccable service at Belmond Hotel Caruso.",
      hotel_photo: hotelPic5,
      hotel_city: "Ravello",
      hotel_country: "Italy",
      hotel_address: "Piazza S. Giovanni del Toro, 2, 84010 Ravello SA, Italy",
      parking_name: "Belmond Hotel Caruso Parking",
      parking_title: "parking",
      parking_total_slots: 50,
      parking_booked_slots: 30,
      price: 26,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Belmond Hotel Caruso.",
      parking_photo: parking5,
    },

    {
      hotel_name: "The Waldorf Astoria",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience unparalleled luxury and world-class service at The Waldorf Astoria.",
      hotel_photo: hotelPic6,
      hotel_city: "Beverly Hills",
      hotel_country: "USA",
      hotel_address: "9850 Wilshire Blvd, Beverly Hills, CA 90210",
      parking_name: "Waldorf Astoria Parking",
      parking_title: "parking",
      parking_total_slots: 200,
      parking_booked_slots: 150,
      price: 22,
      parking_description:
        "Our parking facility offers secure and convenient parking for guests of The Waldorf Astoria.",
      parking_photo: parking6,
    },

    {
      hotel_name: "The Ritz London",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience British elegance and impeccable service at The Ritz London.",
      hotel_photo: hotelPic7,
      hotel_city: "London",
      hotel_country: "UK",
      hotel_address: "150 Piccadilly, St. James's, London W1J 9BR, UK",
      parking_name: "Ritz London Parking",
      parking_title: "parking",
      parking_total_slots: 100,
      parking_booked_slots: 80,
      price: 35,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of The Ritz London.",
      parking_photo: parking7,
    },

    {
      hotel_name: "The Plaza Hotel",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience timeless elegance and luxury at The Plaza Hotel.",
      hotel_photo: hotelPic8,
      hotel_city: "New York",
      hotel_country: "USA",
      hotel_address: "768 5th Ave, New York, NY 10019",
      parking_name: "Plaza Hotel Parking",
      parking_title: "parking",
      parking_total_slots: 150,
      parking_booked_slots: 100,
      price: 45,
      parking_description:
        "Our parking facility provides easy and secure parking for guests of The Plaza Hotel.",
      parking_photo: parking8,
    },
    {
      hotel_name: "The Oberoi Rajvilas",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience royal splendor and unparalleled hospitality at The Oberoi Rajvilas.",
      hotel_photo: hotelPic9,
      hotel_city: "Jaipur",
      hotel_country: "India",
      hotel_address:
        "Goner Rd, Jagdish Colony, Jaipur, Rajasthan 302031, India",
      parking_name: "Oberoi Rajvilas Parking",
      parking_title: "parking",
      parking_total_slots: 50,
      parking_booked_slots: 20,
      price: 36,
      parking_description:
        "Our parking facility offers secure and convenient parking for guests of The Oberoi Rajvilas.",
      parking_photo: parking9,
    },

    {
      hotel_name: "Burj Al Arab Jumeirah",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience ultimate luxury and breathtaking views at Burj Al Arab Jumeirah.",
      hotel_photo: hotelPic10,
      hotel_city: "Dubai",
      hotel_country: "UAE",
      hotel_address: "Jumeirah St - Dubai - United Arab Emirates",
      parking_name: "Burj Al Arab Parking",
      parking_title: "parking",
      parking_total_slots: 100,
      parking_booked_slots: 80,
      price: 39,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Burj Al Arab Jumeirah.",
      parking_photo: parking10,
    },

    {
      hotel_name: "InterContinental Sydney",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience the best of Sydney with InterContinental's prime location and world-class service.",
      hotel_photo: hotelPic11,
      hotel_city: "Sydney",
      hotel_country: "Australia",
      hotel_address: "117 Macquarie St, Sydney NSW 2000, Australia",
      parking_name: "InterContinental Sydney Parking",
      parking_title: "parking",
      parking_total_slots: 150,
      parking_booked_slots: 100,
      price: 52,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of InterContinental Sydney.",
      parking_photo: parking11,
    },

    {
      hotel_name: "The St. Regis Bali Resort",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience luxurious beachfront living and unparalleled service at The St. Regis Bali Resort.",
      hotel_photo: hotelPic12,
      hotel_city: "Bali",
      hotel_country: "Indonesia",
      hotel_address: "Kawasan Pariwisata, Nusa Dua, Bali 80363, Indonesia",
      parking_name: "St. Regis Bali Parking",
      parking_title: "parking",
      parking_total_slots: 50,
      parking_booked_slots: 30,
      price: 19,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of The St. Regis Bali Resort.",
      parking_photo: parking12,
    },
    {
      hotel_name: "Mandarin Oriental Bangkok",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience the timeless elegance and legendary service of Mandarin Oriental Bangkok.",
      hotel_photo: hotelPic13,
      hotel_city: "Bangkok",
      hotel_country: "Thailand",
      hotel_address: "48 Oriental Avenue, Bangkok 10500, Thailand",
      parking_name: "Mandarin Oriental Bangkok Parking",
      parking_title: "parking",
      parking_total_slots: 40,
      parking_booked_slots: 20,
      price: 37,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Mandarin Oriental Bangkok.",
      parking_photo: parking13,
    },

    {
      hotel_name: "Four Seasons Resort Maui at Wailea",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience Hawaiian paradise and luxurious accommodations at Four Seasons Resort Maui at Wailea.",
      hotel_photo: hotelPic14,
      hotel_city: "Maui",
      hotel_country: "USA",
      hotel_address: "3900 Wailea Alanui Dr, Wailea, HI 96753, USA",
      parking_name: "Four Seasons Maui Parking",
      parking_title: "parking",
      parking_total_slots: 100,
      parking_booked_slots: 50,
      price: 21,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Four Seasons Resort Maui at Wailea.",
      parking_photo: parking14,
    },

    {
      hotel_name: "Rosewood London",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience timeless elegance and exceptional service at Rosewood London.",
      hotel_photo: hotelPic15,
      hotel_city: "London",
      hotel_country: "UK",
      hotel_address: "252 High Holborn, Holborn, London WC1V 7EN, UK",
      parking_name: "Rosewood London Parking",
      parking_title: "parking",
      parking_total_slots: 30,
      parking_booked_slots: 10,
      price: 34,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Rosewood London.",
      parking_photo: parking15,
    },

    {
      hotel_name: "Aman Tokyo",
      hotel_title: "hotel",
      hotel_rating: 5,
      hotel_description:
        "Experience tranquility and minimalist design at Aman Tokyo.",
      hotel_photo: hotelPic16,
      hotel_city: "Tokyo",
      hotel_country: "Japan",
      hotel_address: "1-5-6 Otemachi, Chiyoda City, Tokyo 100-0004, Japan",
      parking_name: "Aman Tokyo Parking",
      parking_title: "parking",
      parking_total_slots: 20,
      parking_booked_slots: 5,
      price: 26,
      parking_description:
        "Our parking facility offers safe and convenient parking for guests of Aman Tokyo.",
      parking_photo: parking16,
    },
  ],
};

export const Hotel_Parking_Static_Data = createReducer(initialState, {
  sethotelparkingdata: (state, action) => {
    state.hotel_parking_data = action.payload;
  },
});
