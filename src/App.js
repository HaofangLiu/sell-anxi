import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from './pages/shop/shop'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={(props) => {
            // console.log(props)
            return <HomePage {...props} />;
          }}
        />
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
