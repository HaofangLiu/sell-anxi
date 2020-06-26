import React from "react";
import "./menu-item.style.scss"

const MenuItem = ({title,imageUrl,size}) => {
  return (
    <div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">来看看？</span>
      </div>
    </div>
  );
};

export default MenuItem;