import React, { useContext } from "react";
import "./Fooditems.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../context/Storecontext";

const Fooditems = ({ id, name, price, description, image, url }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Storecontext);

  return (
    <div className="food-items">
      <div className="food-items-img-container">
        <img src={`${url}/images/${image}`} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more to cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{`${price} Rs`}</p>
      </div>
    </div>
  );
};

export default Fooditems;
