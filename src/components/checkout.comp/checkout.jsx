import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import {
  clearFromCart,
  addCartItem,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = (props) => {
  const { name, imageUrl, price, quantity } = props.item;
  const { deleteItem, removeItem, addCartItem } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItem(props.item);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addCartItem(props.item);
          }}
        >
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          deleteItem(props.item);
        }}
      >
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(clearFromCart(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
