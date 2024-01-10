import { useState } from "react";
import { LOGO_URL } from "../ulits/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../ulits/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");

  const onlineStatus = useOnlineStatus(); 

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟩": "🟥"}</li>
          <li><Link to="/">Home</Link></li>  
          <li><Link to="/about">About Us</Link></li> 
          <li><Link to="/contact">Contact Us</Link></li> 
          <li><Link to="/grocery">Grocery</Link></li> 
          
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
