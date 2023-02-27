import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and get the best deals</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList