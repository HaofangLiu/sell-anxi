import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header.component/header";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectUserL } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout";
import { selectCollectionsKeys } from "./redux/shop/shop.selector";
import { addCollectionAndDocuments } from "./firebase/firebase.utils";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: null,
  //   };
  // }

  componentDidMount() {
    const { setUser, collectionsArray } = this.props;

    //auth.onAuthStateChanged是一个订阅事件，会一直在组件中运行导致内存泄漏
    //onAuthStateChanged will return a unsubscribe obj, so just call this meth to stop subscribe.
    this.unsubscribeFronAuth = auth.onAuthStateChanged(async (userLogged) => {
      // createUserProfileDocument(userLogged);
      // console.log(this.state);

      if (userLogged) {
        const userRef = await createUserProfileDocument(userLogged);
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());email: "asd@123.com", displayName: "asd", createAt: t
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userLogged);
      }

      // console.log(collectionsArray);
      // addCollectionAndDocuments(
      //   "collections",
      //   collectionsArray.map(({ title, items }) => {
      //     return { title, items };
      //   })
      // );
    });
  }

  unsubscribeFronAuth = null;

  componentWillUnmount() {
    this.unsubscribeFronAuth();
  }

  render() {
    return (
      <div>
        <Header />
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
          <Route path="/shop" component={ShopPage} />
          <Route exact={true} path="/checkout" component={CheckoutPage} />
          <Route
            exact={true}
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserL,
  collectionsArray: selectCollectionsKeys,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
