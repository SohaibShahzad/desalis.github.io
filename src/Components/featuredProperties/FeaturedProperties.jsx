import style from "./featuredProperties.module.css";

const FeaturedProperties = () => {
  return (
    <>
    <div className={style.fp}>
      <div className={style.fpItem}>
        <img src="" alt="" className={style.fpImg} />
        <span className={style.fpName}>My name</span>
        <span className={style.fpCity}>Las Vegas</span>
        <span className={style.fpPrice}>Starting from 12</span>
        <div className={style.fpRating}>
          <button>Hello World</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img src="" alt="" className={style.fpImg} />
        <span className={style.fpName}>My name</span>
        <span className={style.fpCity}>Las Vegas</span>
        <span className={style.fpPrice}>Starting from 12</span>
        <div className={style.fpRating}>
          <button>Hello World</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img src="" alt="" className={style.fpImg} />
        <span className={style.fpName}>My name</span>
        <span className={style.fpCity}>Las Vegas</span>
        <span className={style.fpPrice}>Starting from 12</span>
        <div className={style.fpRating}>
          <button>Hello World</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img src="" alt="" className={style.fpImg} />
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
