import React from "react";
import CollectionOverview from "../../components/collections-overview/collectionsOverview.comp";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/with-spinner";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const {
      match,
      isCollectionFetching,
      selectIsCollectionsLoaded,
    } = this.props;

    return (
      <div className="shop-page">
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => {
    dispatch(fetchCollectionStart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
