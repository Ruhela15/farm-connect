import React, { useContext } from "react";
import "./Fooditems.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../context/Storecontext";

const Fooditems = ({id, name, price, description, image,url}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Storecontext);

  return (
    <div className="food-items">
      <div className="food-items-img-container">
        <img src={url + "/images/" + image} alt="" className="food-item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{`${price} Rs`}</p>
      </div>
    </div>
  );
};

export default Fooditems
