import React from "react";
import MenuItem from "../../components/menu-item/menu-item";
import "./directory.style.scss";
import { connect } from "react-redux";
import { selectD } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = (props) => {
  const { directory } = props;
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherSectionprops }) => {
        return <MenuItem key={id} {...otherSectionprops} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectD,
});

export default connect(mapStateToProps, null)(Directory);
