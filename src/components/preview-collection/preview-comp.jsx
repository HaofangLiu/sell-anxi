import React from "react";
import "./preview.style.scss";
import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = (props) => {
  //   console.log(props);
  let { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
