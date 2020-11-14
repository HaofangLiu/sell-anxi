import React from "react";

import "./signin-and-signup.scss";

import SignIn from "../../components/sign-in.component/sign-in";

import SignUp from "../../components/sign-up.component/sign-up";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
