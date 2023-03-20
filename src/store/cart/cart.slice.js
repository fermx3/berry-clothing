import { createSlice } from '@reduxjs/toolkit';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  lastPurchase: {
    items: [],
    total: 0,
  },
};

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems);
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    addLastPurchase(state, action) {
      state.lastPurchase = action.payload;
    },
    clearCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  addLastPurchase,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
