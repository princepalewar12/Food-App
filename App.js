import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS object => HTMLElement(render)

const Header =()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard = (props) =>{
  // const {name, cuisine, rating, time} = props;//this line is not compulsory
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/bcbaf973d85efe50d93ede92b5ce1500" alt="Haldiram restaurant" />
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  )
}
const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard name="Haldiram's Sweets" cuisine="Sweets, North India, Asia" rating="4.4 Stars" time="27Min"/>
        <RestaurantCard name="KFC" cuisine="Burger, Fast Food" rating="4.2" time="27Min"/>
      </div> 
    </div>
  )
}
const AppLayout = () =>{
  return(
    <div className="app">
      <Header/>
      <Body/> 
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
 