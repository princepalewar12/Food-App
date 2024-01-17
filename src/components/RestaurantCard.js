import { useContext } from "react";
import userContext from "../ulits/UserContext";
import { CDN_URL } from "../ulits/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {loggedInUser} =useContext(userContext)
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div data-testid="resCard" className=" rounded-lg my-3 mx-9 pt-2 px-3 w-[250px] h-[500px] hover:border-2">
      <img
        className="rounded-lg"

        style={{ width: "100%", height: "200px" }}
        src={CDN_URL + cloudinaryImageId}
        alt="res-photo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}Stars</h4>
      <h4>{deliveryTime}Min</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// Input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
