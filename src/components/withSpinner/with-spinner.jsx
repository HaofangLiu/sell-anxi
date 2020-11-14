import React from "react";
import "./with-spinner.scss";

const WithSpinner = (WrappedComponent) => {
  return (props) => {
    const { isLoading, ...otherProps } = props;
    return isLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default WithSpinner;
