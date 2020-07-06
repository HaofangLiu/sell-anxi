import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header.component/header";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup";

function App() {
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
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route exact={true} path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
