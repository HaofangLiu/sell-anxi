import React from "react";
import SHOP_DATA from "./data";
import PreviewCollection from "../../components/preview-collection/preview-comp";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          return <PreviewCollection key={collection.id} {...collection}/>;
        })}
      </div>
    );
  }
}

export default ShopPage;
