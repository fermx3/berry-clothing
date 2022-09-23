import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as BerryLogo } from "../../assets/berry.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { OutsideCloser } from "../../utils/hooks/outside-closer.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  NavRigthModule,
  UserName,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <BerryLogo className="logo" />
          <h4>Berry Clothing</h4>
        </LogoContainer>
        <NavRigthModule>
            {currentUser && (
              <UserName>
                Hi!{" "}
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </UserName>
            )}
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )}
            <OutsideCloser>
              <CartIcon />
              {isCartOpen && <CartDropdown />}
            </OutsideCloser>
          </NavLinks>
        </NavRigthModule>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
