import React from "react";

import Button from "../custom-button.comp/button";

import "./cart-dropdown.scss";

import CartItem from "../cart-item.comp/cart-item";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selecter";
import { createStructuredSelector } from "reselect";

const CartDropDown = (props) => {
  const { cartItems } = props;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});

export default connect(mapStateToProps, null)(CartDropDown);
