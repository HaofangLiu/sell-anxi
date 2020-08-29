import React from "react";
import CollectionOverview from "../../components/collections-overview/collectionsOverview.comp";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/with-spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // unsubscrubeFromSnapshop = null;

  //need
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshop) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshop);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
    // this.unsubscrubeFromSnapshop = collectionRef.onSnapshot(
    //   async (snapshop) => {
    //    const collectionMap = await convertCollectionSnapshotToMap(snapshop);
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => {
    dispatch(updateCollections(collectionMap));
  },
});
export default connect(null, mapDispatchToProps)(ShopPage);
