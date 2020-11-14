import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../components/preview-collection/preview-comp";
import { selectCollectionsKeys } from "../../redux/shop/shop.selector";

const CollectionOverview = (props) => {
  const { collections } = props;
  // console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map((item) => {
        return <PreviewCollection key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    collections: selectCollectionsKeys,
  });

export default connect(mapStateToProps)(CollectionOverview);
