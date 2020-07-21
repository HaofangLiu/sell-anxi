import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { clearFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = (props) => {
  const { name, imageUrl, price, quantity } = props.item;
  const { deleteItem } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow"></div>
        {quantity}
        <div lassName="arrow"></div>
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
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
