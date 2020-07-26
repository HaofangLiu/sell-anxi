import React from "react";
import CollectionOverview from "../../components/collections-overview/collectionsOverview.comp";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = (props) => {
  const { match } = props;
  // console.log(match);
  return (
    <div className="shop-page">
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      <Route exact path={`${match.path}`} component={CollectionOverview} />
    </div>
  );
};

export default ShopPage;
