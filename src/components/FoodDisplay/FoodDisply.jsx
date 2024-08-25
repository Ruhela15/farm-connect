import React, { useContext } from "react";
import "./FoodDisplay.css";
import { Storecontext } from "../content/Storecontext";
import Fooditems from "../fooditems/fooditems";
const FoodDisply = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Listed Items Near</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditems
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisply;
