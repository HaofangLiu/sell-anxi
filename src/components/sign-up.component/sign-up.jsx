import React from "react";

import FormInput from "../form-input/form-input.comp";

import Button from "../custom-button.comp/button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      password: "",
      email: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("the password not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
