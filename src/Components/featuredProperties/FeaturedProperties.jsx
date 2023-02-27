import style from "./featuredProperties.module.css";
import hotel1 from "../../images/hotelPic1.jpg";
import hotel2 from "../../images/hotelPic2.jpg";
import hotel3 from "../../images/hotelPic3.jpg";
import hotel4 from "../../images/hotelPic4.jpg";

const FeaturedProperties = () => {
  return (
    <>
      <div className={style.fp}>
        <div className={style.fpItem}>
          <img src={hotel1} alt="" className={style.fpImg} />
          <span className={style.fpName}>My name</span>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={style.fpPrice}>Starting from 12</span>
          <div className={style.fpRating}>
            <button>Hello World</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel2} alt="" className={style.fpImg} />
          <span className={style.fpName}>My name</span>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={style.fpPrice}>Starting from 12</span>
          <div className={style.fpRating}>
            <button>Hello World</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel3} alt="" className={style.fpImg} />
          <span className={style.fpName}>My name</span>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={style.fpPrice}>Starting from 12</span>
          <div className={style.fpRating}>
            <button>Hello World</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className={style.fpItem}>
          <img src={hotel4} alt="" className={style.fpImg} />
          <span className={style.fpName}>My name</span>
          <span className={style.fpCity}>Las Vegas</span>
          <span className={style.fpPrice}>Starting from 12</span>
          <div className={style.fpRating}>
            <button>Hello World</button>
            <span>Excellent</span>
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
