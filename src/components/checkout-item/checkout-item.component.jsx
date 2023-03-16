import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from '../../store/cart/cart.reducer';

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addProductHandler = () => dispatch(addItemToCart(cartItem));
  const removeProductHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className='arrow' onClick={removeProductHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addProductHandler}>
          &#10095;
        </div>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
