import React, { createContext, useReducer } from "react";

export const CartContexReducer = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let exist = state.cart.some(
        (element) => element.id === action.payload.id
      );
      if (exist) {
        let newArr = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return {
              ...element,
              quantity: element.quantity + action.payload.quantity,
            };
          } else {
            return element;
          }
        });
        return { ...state, cart: newArr };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "GET_TOTAL_PRICE":
      let total = state.cart.reduce(
        (acc, elemento) => acc + elemento.price * elemento.quantity,
        0
      );
      return { ...state, totalPrice: total };
    case "GET_TOTAL_QUANTITY":
      let items = state.cart.reduce(
        (acc, elemento) => acc + elemento.quantity,
        0
      );
      console.log("items", items);
      return { ...state, totalQuantity: items };
    case "REMOVE_PRODUCT":
      let newCart = state.cart.filter(
        (elemento) => elemento.id !== action.payload
      );
      return { ...state, cart: newCart };
    default:
      return state;
  }
}

const CartContextReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContexReducer.Provider value={{ state, dispatch }}>
      {children}
    </CartContexReducer.Provider>
  );
};

export default CartContextReducerProvider;
