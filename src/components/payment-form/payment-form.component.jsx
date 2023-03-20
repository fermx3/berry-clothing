import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { addLastPurchase, clearCart } from '../../store/cart/cart.slice';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from './payment-form.styles';
import Alert from '../alert/alert.component';

const PaymentForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const items = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const paymentHandler = async (e) => {
    e.preventDefault();
    setErrorMessage();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    });

    const data = await response.json();

    const {
      paymentIntent: { client_secret },
    } = data;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : currentUser.email,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      setErrorMessage(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        dispatch(addLastPurchase({ items, total: amount }));
        dispatch(clearCart([]));
        navigate('/thank-you');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={
            isProcessingPayment
              ? BUTTON_TYPE_CLASSES.disabled
              : BUTTON_TYPE_CLASSES.inverted
          }
        >
          Pay now
        </PaymentButton>
      </FormContainer>
      {errorMessage && <Alert>{errorMessage}</Alert>}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
