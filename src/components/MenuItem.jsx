import React from "react";

const MenuItem = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  const itemStyle = {
    backgroundImage: `url(${item.imgSrc})`,
  };

  return (
    <li className="item" >
      <div className="background-image" style={itemStyle}></div>
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
        </div>
        <img
          className="item-image"
          src={item.imgSrc}
          alt={`Glamour shot of a(n) ${item.name}`}
        />
        <p className="item-description">
          <em>{item.description}</em>
        </p>
        <p className="item-price">
          <b>${item.price}</b>{" "}
          <button className="add-button" onClick={handleAddToCart}>
            Push Item to Cart
          </button>
        </p>
      </div>
    </li>
  );
};

export default MenuItem;
