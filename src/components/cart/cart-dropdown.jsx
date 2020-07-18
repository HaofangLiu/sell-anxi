import React from "react";

import Button from "../custom-button.comp/button";

import "./cart-dropdown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropDown;
