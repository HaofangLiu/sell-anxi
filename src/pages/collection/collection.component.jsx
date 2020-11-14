import React from "react";
import { connect } from "react-redux";
import { selectColeection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.styles.scss";

const CollectionPage = (props) => {
  // console.log(props);
  const { title, items } = props.collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColeection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
