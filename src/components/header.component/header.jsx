import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./header.style.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.style";

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
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <>
            <span className="welcome-msg option">
              Welcome {currentUser.displayName}
            </span>
            <OptionDiv
              onClick={() => {
                auth.signOut();
              }}
            >
              SIGN OUT
            </OptionDiv>
          </>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? "" : <CartDropDown />}
    </HeaderContainer>
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
