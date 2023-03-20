import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Button from '../../components/button/button.component';

import {
  EmptyCartContainer,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  HeaderBlockLastChild,
  Total,
} from './checkout.styles';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const startShoppingHandler = () => {
    navigate('/shop');
  };

  if (cartTotal === 0) {
    return (
      <EmptyCartContainer>
        <h1>Oops! It looks like your cart is empty.</h1>
        <p>Start shopping now and fill your cart with items you'll love. </p>
        <Button onClick={startShoppingHandler}>Start Shopping Now</Button>
      </EmptyCartContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Desc</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Qty</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlockLastChild>
          <span>Remove</span>
        </HeaderBlockLastChild>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
