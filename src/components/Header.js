import { useState } from "react";
import { LOGO_URL } from "../ulits/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../ulits/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container"> 
        <img className="w-56" src={LOGO_URL} /> 
      </div> 
      <div className="nav-items flex items-center ">
        <ul className=" flex m-4 p-4 items-center">
          <li className="px-4 text-3xl">Online Status: {onlineStatus ? "🟩" : "🟥"}</li>
          <li className="px-4">
            <Link className="text-3xl" to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link className="text-3xl" to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link className="text-3xl" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link className="text-3xl" to="/grocery">Grocery</Link>
          </li>

          <li>
            </li><button
            className="login-btn text-3xl bg-lime-300 p-4 rounded-lg border-2 border-emerald-950"
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
