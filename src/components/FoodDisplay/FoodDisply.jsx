import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { Storecontext } from "../content/Storecontext";
import Fooditems from "../fooditems/fooditems";

const FoodDisply = ({ category }) => {
  const { food_list } = useContext(Storecontext);
  const [visibleItems, setVisibleItems] = useState(8); // Number of items to show initially

  const handleViewMore = () => {
    setVisibleItems(prev => prev + 8); // Load more items
  };

  const filteredItems = category === "All" 
    ? food_list 
    : food_list.filter(item => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Listed Items Near</h2>
      <div className="food-display-list">
        {filteredItems.slice(0, visibleItems).map((item, index) => (
          <Fooditems
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
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

export default FoodDisply;
