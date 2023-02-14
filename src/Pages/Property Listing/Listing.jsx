import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";

const Listing = () => {
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

    // Set the state to the new array of objects
    // imagesArray.map((image) => {
    //   selectedImages.push(image);
    // });

    // console.log(selectedImages);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    // console.log(selectedImages);

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

  // const showdata = () => {
  //   console.log(titlefile);
  // };

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
    // dispatch({
    //   type: "settitlefile",
    //   payload: singlefile,
    // });
    // dispatch({
    //   type: "settitlefile",
    //   payload: multiplefile,
    // });
    // setTimeout(() => {
    //   showdata();
    // }, 5000);
  };

  return (
    <>
      <div>
        <p>{userdata.name}</p>
        <p>{userdata.city}</p>
        <p>{userdata.title}</p>
        <p>{userdata.type}</p>
        <p>{userdata.description}</p>
        {/* <p>{titlefile}</p> */}
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
                  Property Listing Form
                </h5>
                <hr className="w-100" />
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Property Name
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
                      <label for="formFile" className="text-dark form-label">
                        Property Thumbnail Picture
                      </label>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          onChange={selectsingleimg}
                          accept="image/*"
                          type="file"
                        />
                        <PhotoCamera />
                      </IconButton>
                      <label
                        className={`${style.labelitem} ${
                          singlefile ? "" : "d-none"
                        } `}
                      >
                        {singlefile && (
                          <img
                            className={`${style.labelitem} overflow-hidden `}
                            src={URL.createObjectURL(singlefile)}
                            alt=""
                          />
                        )}
                      </label>
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
                        // onChange={handleMultipleFileChange}
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
          <section>
            <label className={`${style.labelitem}`}>
              + Add Images
              <br />
              <span>up to 10 images</span>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
            <br />

            {/* <input type="file" multiple /> */}

            {selectedImages.length > 0 &&
              (selectedImages.length > 10 ? (
                <p className={`${style.error}`}>
                  You can't upload more than 10 images! <br />
                  <span>
                    please delete <b> {selectedImages.length - 10} </b> of them
                  </span>
                </p>
              ) : (
                <button
                  className={`${style.upload_btn}`}
                  onClick={() => {
                    console.log(selectedImages);
                  }}
                >
                  UPLOAD {selectedImages.length} IMAGE
                  {selectedImages.length === 1 ? "" : "S"}
                </button>
              ))}

            <div className={`${style.images}`}>
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={image} className={`${style.image}`}>
                      <img src={image} height="200" alt="upload" />
                      <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button>
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Listing;
