import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
  const { price } = props;
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H96idKzqmL9MvysGcmNiALEdrRN3m69WSSWPyNJozRyKSnIzvoICmf0nr26YNJDPkfA2zvNlHZEbLYLktFNEM9z00zmppmiCz";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Lucas Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
