import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CartButton,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Add Items to Cart</EmptyMessage>
        )}
      </CartItems>
      <CartButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
