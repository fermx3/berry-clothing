import { CartItemType } from "../cart-dropdown/cart-dropdown.component";

import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemDetail,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetail>{name}</ItemDetail>
        <ItemDetail>
          {quantity} x ${price}
        </ItemDetail>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
