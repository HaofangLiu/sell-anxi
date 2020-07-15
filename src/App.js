import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header.component/header";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    //auth.onAuthStateChanged是一个订阅事件，会一直在组件中运行导致内存泄漏
    //onAuthStateChanged will return a unsubscribe obj, so just call this meth to stop subscribe.
    this.unsubscribeFronAuth = auth.onAuthStateChanged(async (userLogged) => {
      // createUserProfileDocument(userLogged);
      // console.log(this.state);

      if (userLogged) {
        const userRef = await createUserProfileDocument(userLogged);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ user: userLogged });
      }
    });
  }

  unsubscribeFronAuth = null;

  componentWillUnmount() {
    this.unsubscribeFronAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.user} />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(props) => {
              // console.log(props)
              //prop主要包含history,location,match,__proto__
              return <HomePage {...props} />;
            }}
          />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
