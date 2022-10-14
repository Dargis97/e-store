import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const CartContext = createContext();

const Storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = { cartItems: Storage };

const CartContextProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatchState({ type: 'ADD', payload });
    return state.cartItems;
  };

  const removeProduct = (payload) => {
    dispatchState({ type: 'REMOVE', payload });
    return state.cartItems;
  };

  const increaseQuantity = (payload) => {
    dispatchState({ type: 'INCQTY', payload });
    return state.cartItems;
  };

  const decreaseQuantity = (payload) => {
    dispatchState({ type: 'DECQTY', payload });
    return state.cartItems;
  };

  const clearBasket = () => {
    dispatchState({ type: 'CLEAR', payload: undefined });
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getItems,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
