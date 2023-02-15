import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HotelForm = () => {
  const dispatch = useDispatch();
  const { hotelData } = useSelector((state) => state.setHotelData);

  const [singlefile, setsingleFile] = useState();
  const [multiplefile, setmultipleFile] = useState();

  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    title: "",
    type: "",
    address: "",
    distance: 0,
    price: 0,
    description: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;

    setHotel({ ...hotel, [e.target.name]: value });
  };

  const handleSingleFileChange = (e) => {
    if (e.target.files) {
      setsingleFile(e.target.files[0]);
    }
  };
  const handleMultipleFileChange = (e) => {
    if (e.target.files) {
      setmultipleFile(e.target.files);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "sethoteldata",
      payload: hotel,
    });
  };

  return (
    <>
      <div>
        <p>{hotelData.name}</p>
        <p>{hotelData.city}</p>
        <p>{hotelData.title}</p>
        <p>{hotelData.type}</p>
        <p>{hotelData.price}</p>
        <p>{hotelData.address}</p>
        <p>{hotelData.distance}</p>
        <p>{hotelData.description}</p>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 col-lg-12 col-sm-12  d-flex flex-column">
              <div
                className="container p-3 my-4 rounded-7  border bg-light border-light rounded-3"
                style={{
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <h5 className="text-uppercase text-dark text-center ">
                  Hotel Listing Form
                </h5>
                <hr className="w-100" />
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Name
                      </label>
                      <input 
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                        name="name"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Type
                      </label>
                      <input 
                        type="text"
                        name="type"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Cheapest Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Distance in kilometers
                      </label>
                      <input
                        type="number"
                        name="distance"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label for="formFile" className="text-dark form-label">
                        Title Photo (png,jpey)*
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        onChange={handleSingleFileChange}
                        accept="image/png, image/jpeg"
                        id="formFile"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="formFileMultiple"
                        className="text-dark form-label"
                      >
                        Add multiple photos of your property (png,jpey)*
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        onChange={handleMultipleFileChange}
                        id="formFileMultiple"
                        accept="image/png, image/jpeg"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="my-3 ">
                  <label
                    for="exampleFormControlTextarea1"
                    className="text-dark form-label"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  onClick={handleClick}
                  className="font-medium text-base px-4 py-2 my-3 leading-relaxed inline-block rounded-4 whitespace-nowrap cursor-pointer bg-black text-white"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelForm;
