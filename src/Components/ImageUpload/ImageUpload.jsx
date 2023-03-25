import React from "react";
import "./ImageUpload.css";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

class ImageUpload extends React.Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, active } = this.state;
    return (
      <div>
        {active === "edit" ? (
          <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
        ) : null}
      </div>
    );
  }
}

export default ImageUpload;
