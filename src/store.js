import { configureStore } from '@reduxjs/toolkit';
import cart from './features/cart/cartSlice';
import user from './features/cart/userSlice';

const store = configureStore({
  reducer: {
    cart,
    user,
  },
});

export default store;
