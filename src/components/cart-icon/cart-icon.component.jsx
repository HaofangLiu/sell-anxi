import React from "react";
import { connect } from "react-redux";
import "./cart-icon.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = (props) => {
  const { toggleCartHidden } = props;
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
