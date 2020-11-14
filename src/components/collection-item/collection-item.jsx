import React from "react";
import "./collection-item.scss";
import Button from "../custom-button.comp/button";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";

const CollectionItem = (props) => {
  //   console.log(props);
  let { name, imageUrl, price } = props.item;
  const { item, addCartItem } = props;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        inverted
        onClick={() => {
          addCartItem(item);
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
