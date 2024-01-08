import { useState } from "react";
import { LOGO_URL } from "../ulits/contants";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");
  // let btnName = "Login";
  // const btnChange=()=>{
  //    setBtnName(btnName = "Logout");
  //    console.log(btnName);
  // }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
