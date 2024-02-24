import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  numberOfItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.cartItems.find(
        (item) => item.cartId === payload.cartId
      );
      if (item) {
        item.amount += payload.amount;
      } else {
        state.cartItems.push(payload);
      }
      state.numberOfItemsInCart += payload.amount;
      state.cartTotal += payload.price * payload.amount;
      cartSlice.caseReducers.calculateTotal(state);
      toast.success('Item added to cart');
    },
    removeItem: (state, { payload }) => {
      const { cartId } = payload;
      const item = state.cartItems.find((item) => item.cartId === cartId);
      state.cartItems = state.cartItems.filter(
        (cart) => cart.cartId !== cartId
      );
      state.numberOfItemsInCart -= item.amount;
      state.cartTotal -= item.amount * item.price;
      cartSlice.caseReducers.calculateTotal(state);
      toast.error('Item removed from cart');
    },
    editItem: (state, { payload }) => {
      const { amount, cartId } = payload;
      const item = state.cartItems.find((item) => item.cartId === cartId);

      state.cartTotal -= item.amount * item.price;
      state.cartTotal += amount * item.price;
      state.numberOfItemsInCart += amount - item.amount;
      item.amount = amount;
      cartSlice.caseReducers.calculateTotal(state);
      toast.success('Cart updated');
    },
    clearCart: () => {
      localStorage.setItem('cart', initialState);
    },
    calculateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      console.log(
        state.cartTotal + state.tax + state.shipping,
        state.cartTotal,
        state.tax,
        state.shipping
      );
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
