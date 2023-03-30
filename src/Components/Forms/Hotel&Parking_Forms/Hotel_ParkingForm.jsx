import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Hotel_Forms/addhotel.css";

const AddHotelParkingForm = () => {
  const IsMobile = useMediaQuery("(max-width:450px)");

  const [formValues, setFormValues] = useState({
    hotel_name: "",
    hotel_title: "",
    parking_name: "",
    parking_title: "",
    total_slots: "",
    booked_slots: "",
    hotel_desc: "",
    parking_desc: "",
    hotel_photos: [],
    parking_photos: [],
    city: "",
    country: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [selectedImages, setSelectedImages] = useState([]);
  const [parkingImages, setParkingImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    let imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    // event.target.value = "";
  };
  const onParkingSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    let imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setParkingImages((previousImages) => previousImages.concat(imagesArray));
    // event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  function deleteParkingHandler(image) {
    setSelectedImages(parkingImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const { mode } = useSelector((state) => state.mode);

  return (
    <div className={`container  ${IsMobile ? "" : "w-50"} `}>
      <h1 className="text-center fw-bold">Add Hotel And Parking Form</h1>
      <form className="needs-validation mx-4">
        <div className="row mt-2">
          <div className="col-md-6">
            <label
              htmlFor="validationCustom01"
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Hotel Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              id="validationCustom01"
              value={formValues.name}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Hotel Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              value={formValues.title}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label
              htmlFor="validationCustom01"
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Parking Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Parking Name"
              name="parking_name"
              id="validationCustom01"
              value={formValues.parking_name}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Parking Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Parking Title"
              name="parking_title"
              value={formValues.parking_title}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label
              htmlFor="validationCustom01"
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Total Slots
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Total Slots"
              name="total_slots"
              id="validationCustom01"
              value={formValues.total_slots}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Booked Slots
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Booked Slots"
              name="booked_slots"
              value={formValues.booked_slots}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="row">
            <label
              htmlFor=""
              className={`labels mt-2 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              Upload Hotel Images
            </label>
            <div className="col-md-12 col-sm-4">
              <div className="image-selector">
                {selectedImages &&
                  selectedImages.map((image, index) => {
                    return (
                      <div key={image} className={`image-preview mx-1 my-1`}>
                        <img
                          className="preview-image"
                          src={image}
                          alt="upload"
                        />
                        <div className="image-overlay d-flex flex-row justify-content-between">
                          <p className="image-number text-light ms-1">
                            {index + 1}
                          </p>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            className="delete-button"
                          >
                            <DeleteIcon
                              className="text-light me-1"
                              onClick={() => deleteHandler(image)}
                              fontSize="small"
                            />
                          </IconButton>
                        </div>
                      </div>
                    );
                  })}
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="label"
                  className="add-button"
                >
                  <input
                    hidden
                    onChange={onSelectFile}
                    accept="image/png , image/jpeg"
                    type="file"
                    multiple
                  />
                  <AddPhotoAlternateIcon />
                </IconButton>
              </div>
            </div>
            <div
              className={`container ${
                selectedImages.length < 10 ? "d-none" : ""
              } text-center my-3`}
            >
              {selectedImages.length > 0 &&
                (selectedImages.length > 10 ? (
                  <p className="text-danger">
                    You can't upload more than 10 images! <br />
                    <span>
                      please delete <b> {selectedImages.length - 10} </b> of
                      them
                    </span>
                  </p>
                ) : (
                  <div className="">
                    <button
                      className={`btn btn-primary btn-md`}
                      onClick={() => {
                        console.log(selectedImages);
                      }}
                    >
                      UPLOAD {selectedImages.length} IMAGE
                      {selectedImages.length === 1 ? "" : "S"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="row">
            <label
              htmlFor=""
              className={`labels mt-2 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              Upload Parking Images
            </label>
            <div className="col-md-12 col-sm-4">
              <div className="image-selector">
                {parkingImages &&
                  parkingImages.map((image, index) => {
                    return (
                      <div key={image} className={`image-preview mx-1 my-1`}>
                        <img
                          className="preview-image"
                          src={image}
                          alt="upload"
                        />
                        <div className="image-overlay d-flex flex-row justify-content-between">
                          <p className="image-number text-light ms-1">
                            {index + 1}
                          </p>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            className="delete-button"
                          >
                            <DeleteIcon
                              className="text-light me-1"
                              onClick={() => deleteParkingHandler(image)}
                              fontSize="small"
                            />
                          </IconButton>
                        </div>
                      </div>
                    );
                  })}
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="label"
                  className="add-button"
                >
                  <input
                    hidden
                    onChange={onParkingSelectFile}
                    accept="image/png , image/jpeg"
                    type="file"
                    multiple
                  />
                  <AddPhotoAlternateIcon />
                </IconButton>
              </div>
            </div>
            <div
              className={`container ${
                parkingImages.length < 10 ? "d-none" : ""
              } text-center my-3`}
            >
              {parkingImages.length > 0 &&
                (parkingImages.length > 10 ? (
                  <p className="text-danger">
                    You can't upload more than 10 images! <br />
                    <span>
                      please delete <b> {parkingImages.length - 10} </b> of
                      them
                    </span>
                  </p>
                ) : (
                  <div className="">
                    <button
                      className={`btn btn-primary btn-md`}
                      onClick={() => {
                        console.log(parkingImages);
                      }}
                    >
                      UPLOAD {parkingImages.length} IMAGE
                      {parkingImages.length === 1 ? "" : "S"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Area"
              value={formValues.address}
              name="address"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Country
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              value={formValues.country}
              name="country"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              City
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="state"
              value={formValues.city}
              name="city"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12 mt-2">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Hotel Description
            </label>
            <textarea
              className="form-control"
              placeholder="description"
              value={formValues.hotel_desc}
              name="hotel_desc"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12 mt-2">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Parking Description
            </label>
            <textarea
              className="form-control"
              placeholder="description"
              value={formValues.parking_desc}
              name="parking_desc"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button
            className="btn btn-primary btn-md profile-button mb-4"
            type="submit"
          >
            Add Hotel And Parking
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotelParkingForm;
