import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { Storecontext } from "../context/Storecontext";
import Fooditems from "../Fooditems/Fooditems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);
  const [visibleItems, setVisibleItems] = useState(8);

  const handleViewMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  const filteredItems = category === "All" 
    ? food_list 
    : food_list.filter(item => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Listed Items Near</h2>
      <div className="food-display-list">
        {filteredItems.slice(0, visibleItems).map(item => (
          <Fooditems
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            url={item.url} // Ensure `url` is being passed if needed
          />
        ))}
      </div>
      {filteredItems.length > visibleItems && (
        <button className="view-more-button" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default FoodDisplay;
