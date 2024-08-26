import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe
        temporibus, perferendis suscipit molestiae explicabo in impedit iste
        ducimus? Quibusdam.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className={`menu-item ${
              category === item.menu_name ? "active" : ""
            }`}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`menu-item-img ${category === item.menu_name ? "active" : ""}`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
