import { CDN_URL } from "../ulits/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className=" rounded-lg my-3 mx-9 pt-2 px-3 w-[250px] h-[500px] bg-gray-100 hover:bg-slate-200" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-photo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4> 
      <h4>{costForTwo}</h4>
      <h4>{avgRating}Stars</h4>
      <h4>{deliveryTime}Min</h4>
    </div>
  );
};

export default RestaurantCard;
