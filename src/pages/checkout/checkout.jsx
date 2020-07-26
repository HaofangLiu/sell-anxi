import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/cart/cart.selecter";
import CheckoutItem from "../../components/checkout.comp/checkout";
import StripeCheckoutButton from "../../components/stript-btn/stript-button";

const CheckoutPage = (props) => {
  const { cartItems, total } = props;
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">
        <span>{`Total : ${total}`}</span>
      </div>
      <div className="test-warn">
        USE 4242 4242 4242 4242 TO PAY
        <br />
        DATE ANY FUTURE
        <br />
        ANY CODE FOR SEC
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
