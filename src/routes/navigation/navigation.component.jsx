import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as BerryLogo } from '../../assets/berry.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { OutsideCloser } from '../../utils/hooks/outside-closer.utils';

import {
  NavBar,
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  LoggedInUser,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavBar>
        <NavigationContainer>
          <LogoContainer to='/'>
            <BerryLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <OutsideCloser>
              <CartIcon />
              {isCartOpen && <CartDropdown />}
            </OutsideCloser>
          </NavLinks>
        </NavigationContainer>
        {currentUser && (
          <LoggedInUser>
            <div>
              <p>
                <span>Welcome! </span>
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </p>
            </div>
            {currentUser.photoURL && (
              <img src={currentUser.photoURL} alt={currentUser.displayname} />
            )}
          </LoggedInUser>
        )}
      </NavBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
