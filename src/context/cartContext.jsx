import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const CartContext = createContext();

const initialState = { cartItems: [] };

const CartContextProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatchState({ type: 'ADD', payload });
  };

  const removeProduct = (payload) => {
    dispatchState({ type: 'REMOVE', payload });
  };

  const increaseQuantity = (payload) => {
    dispatchState({ type: 'INCQTY', payload });
  };

  const decreaseQuantity = (payload) => {
    dispatchState({ type: 'DECQTY', payload });
  };

  const clearBasket = () => {
    dispatchState({ type: 'CLEAR', payload: undefined });
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
