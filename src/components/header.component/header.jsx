import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectUserL } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selecter";

const Header = (props) => {
  const { currentUser } = props;
  const { hidden } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="./shop">
          SHOP
        </Link>
        <Link className="option" to="./contact">
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <span className="welcome-msg option">
              Welcome {currentUser.displayName}
            </span>
            <div
              className="option"
              onClick={() => {
                auth.signOut();
              }}
            >
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropDown />}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserL,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
