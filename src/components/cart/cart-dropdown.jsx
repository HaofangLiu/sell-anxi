import React from "react";

import Button from "../custom-button.comp/button";

import "./cart-dropdown.scss";

import CartItem from "../cart-item.comp/cart-item";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selecter";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = (props) => {
  const { cartItems, history, toggleCartHidden } = props;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        Go To CheckOut
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
