import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.slice';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductImage,
  Footer,
  Name,
  Price,
  ProductButton,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(product));
  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
