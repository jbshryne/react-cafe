import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items, addToCart }) => {

  return (
    <div className="menu">
      <ul className="item-list">
        {items.map((item, idx) => {
          // console.log(item);
          return (
            <MenuItem
              key={idx}
              item={item}
              addToCart={addToCart}
            ></MenuItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
