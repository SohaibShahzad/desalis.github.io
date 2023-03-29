import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import "./addhotel.css";

const AddHotelForm = () => {
  const IsMobile = useMediaQuery("(max-width:450px)");

  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    rating: "",
    desc: "",
    photos: [],
    city: "",
    country: "",
    address: "",
  });

  const [imagePreview, setImagePreview] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [singlefile, setsingleFile] = useState();
  const [selectedImages, setSelectedImages] = useState([]);

  const selectsingleimg = (e) => {
    setsingleFile(e.target.files[0]);
  };
  const onSelectFile = (event) => {
    // Get the selected files from the input element
    const selectedFiles = event.target.files;

    // Convert the FileList object to an Array
    const selectedFilesArray = Array.from(selectedFiles);

    // Map over the array of files and return a new array of objects of the desired shape
    let imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  // Function to remove an image from the array of images
  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const dispatch = useDispatch();
  const { userdata, titlefile } = useSelector((state) => state.setpropertyData);

  const [user, setUser] = useState({
    name: "",
    city: "",
    title: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setUser({ ...user, [e.target.name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "setuserdata",
      payload: user,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // Submit form data to API or perform other actions
  };

  const { mode } = useSelector((state) => state.mode);

  return (
    <div className={`container  ${IsMobile ? "" : "w-50"} `}>
      <h1 className="text-center fw-bold">Add Hotel Form</h1>
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
              onchange={handleInputChange}
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
              onchange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Hotel Rating
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="rating"
              name="rating"
              value={formValues.rating}
              required
              onchange={handleInputChange}
            />
          </div>
          <div className="row">
            <label htmlFor="" className={`labels mt-2 text-${mode === "light" ? "dark" : "light"}`}>Upload Images</label>
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
                    please delete <b> {selectedImages.length - 10} </b> of them
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
          <div className="col-md-12 mt-2">
            <label
              className={`labels text-${mode === "light" ? "dark" : "light"}`}
            >
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="description"
              value={formValues.desc}
              name="desc"
              required
              onchange={handleInputChange}
            />
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
              onchange={handleInputChange}
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
              onchange={handleInputChange}
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
              onchange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary btn-md profile-button mb-4" type="submit">
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotelForm;
