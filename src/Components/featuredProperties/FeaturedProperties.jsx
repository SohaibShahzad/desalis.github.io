import style from "./featuredProperties.module.css";
import hotel1 from "../../images/hotelPic1.jpg";
import hotel2 from "../../images/hotelPic2.jpg";
import hotel3 from "../../images/hotelPic3.jpg";
import hotel4 from "../../images/hotelPic4.jpg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const FeaturedProperties = () => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  return (
    <>
      <div className={style.fp}>
        <div className={style.fpItem}>
          <img src={hotel1} alt="" className={`${style.fpImg} rounded-2`} />
          <span className={style.fpName}>Luxery Properties</span>
          <Box
            className="justify-content-start m-0"
            sx={{
              width: 200,
            }}
          >
            <Rating
              name="hover-feedback"
              value={4}
              precision={0.5}
              getLabelText={getLabelText}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              // onChangeActive={(event, newHover) => {
              //   setHover(newHover);
              // }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/* {rating !== null && (
                <Box sx={{ mb: 1, fontSize: 17 }}>
                  {labels[rating ? rating : hotel_rating]}
                </Box>
              )} */}
          </Box>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={`${style.fpPrice}`}>
            La Maison d'Eté is set in Poste Lafayette on the...
          </span>
          <div className={style.fpRating}>
            <button className="btn btn-primary btn-md btn-block">
              Explore Property
            </button>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel2} alt="" className={`${style.fpImg} rounded-2`} />
          <span className={style.fpName}>Resorts</span>
          <Box
            className="justify-content-start m-0"
            sx={{
              width: 200,
            }}
          >
            <Rating
              name="hover-feedback"
              value={4}
              precision={0.5}
              getLabelText={getLabelText}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              // onChangeActive={(event, newHover) => {
              //   setHover(newHover);
              // }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/* {rating !== null && (
                <Box sx={{ mb: 1, fontSize: 17 }}>
                  {labels[rating ? rating : hotel_rating]}
                </Box>
              )} */}
          </Box>
          <span className={style.fpCity}>California</span>
          <span className={`${style.fpPrice}`}>
            La Maison d'Eté is set in Poste Lafayette on the...
          </span>
          <div className={style.fpRating}>
            <button className="btn btn-primary btn-md btn-block">
              Explore Property
            </button>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel3} alt="" className={`${style.fpImg} rounded-2`} />
          <span className={style.fpName}>Luxery Hotels</span>
          <Box
            className="justify-content-start m-0"
            sx={{
              width: 200,
            }}
          >
            <Rating
              name="hover-feedback"
              value={4}
              precision={0.5}
              getLabelText={getLabelText}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              // onChangeActive={(event, newHover) => {
              //   setHover(newHover);
              // }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/* {rating !== null && (
                <Box sx={{ mb: 1, fontSize: 17 }}>
                  {labels[rating ? rating : hotel_rating]}
                </Box>
              )} */}
          </Box>
          <span className={style.fpCity}>Maldives</span>
          <span className={`${style.fpPrice}`}>
            La Maison d'Eté is set in Poste Lafayette on the...
          </span>
          <div className={style.fpRating}>
            <button className="btn btn-primary btn-md btn-block">
              Explore Property
            </button>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel4} alt="" className={`${style.fpImg} rounded-2`} />
          <span className={style.fpName}>Luxery Areas</span>
          <Box
            className="justify-content-start m-0"
            sx={{
              width: 200,
            }}
          >
            <Rating
              name="hover-feedback"
              value={4}
              precision={0.5}
              getLabelText={getLabelText}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              // onChangeActive={(event, newHover) => {
              //   setHover(newHover);
              // }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/* {rating !== null && (
                <Box sx={{ mb: 1, fontSize: 17 }}>
                  {labels[rating ? rating : hotel_rating]}
                </Box>
              )} */}
          </Box>
          <span className={style.fpCity}>Malaysia</span>
          <span className={`${style.fpPrice}`}>
            La Maison d'Eté is set in Poste Lafayette on the...
          </span>
          <div className={style.fpRating}>
            <button className="btn btn-primary btn-md btn-block">
              Explore Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;

// import useFetch from "../../hooks/useFetch";
// const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
// {loading ? (
//   "Loading"
// ) : (

{
  /* <div className={style.fpItem}>
          <img src={hotel2} alt="" className={`${style.fpImg} rounded-2`} />
          <span className={style.fpName}>My name</span>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={style.fpPrice}>Starting from 12</span>
          <div className={style.fpRating}>
            <button>Hello World</button>
            <span>Excellent</span>
          </div>
        </div> */
}
