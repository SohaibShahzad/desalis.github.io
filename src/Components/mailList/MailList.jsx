import "./mailList.css";
import { useMediaQuery } from "@mui/material";

const MailList = () => {
  const isXtraSmallScreen = useMediaQuery("(max-width: 450px)");
  return (
    <div className={`mail ${isXtraSmallScreen?'align-items-center':''} `}>
      <h1 className={`text-start fs-4 text-uppercase`} >News Letter</h1>
      <h1 className="mailTitle text-start fs-5" >Save time, save money!</h1>
      <span className="mailDesc text-start " >Sign up and get the best deals</span>
      <div className="mailInputContainer px-5 ">
        <input type="email" className="btn-block" placeholder="Your Email" />
        <button className="btn btn-primary btn-block">Subscribe</button>
      </div>
    </div>
    
  );
};

export default MailList;
