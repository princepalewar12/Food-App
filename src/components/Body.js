import { useEffect, useState } from "react";
// import resList from "../ulits/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../ulits/useOnlineStatus";

const Body = () => {
  // local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const[topRestaurants, setTopRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are Offline!! Please check your internet</h1>

  // conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = topRestaurants.filter((res) => res.info.avgRating >= 4.3);
            setFilteredRestaurants(filteredList);
            // console.log(`button clicked`);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input
            type="text" 
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurants) => (
          <Link
            key={restaurants.info.id}
             to={"/restaurant/" + restaurants.info.id}
          >
            <RestaurantCard resData={restaurants} />
          </Link>
       ))}     
      </div>
    </div>
  );
};
export default Body;
