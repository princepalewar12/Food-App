import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false)
    const handleClick =()=>{
        // if show items are false make it true & if show items are true make it false
        setShowItems(!showItems)
        console.log(`clicked`);
    }

  return (
    <>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽 </span>
        </div>
        {/* if show items is true then only show items */}
    {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
