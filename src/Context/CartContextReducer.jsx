import React, { createContext, useReducer } from "react";

export const CartContexReducer = createContext();

const getCartStorage = () => {
  let localData = localStorage.getItem("cart");
  return localData ? JSON.parse(localData) : [];
};
const addProductToCartStorage = (obj) => {
  let arr = getCartStorage();
  arr.push(obj);
  return localStorage.setItem("cart", JSON.stringify(arr));
};

const initialState = {
  cart: getCartStorage(),
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
        localStorage.setItem("cart", JSON.stringify(newArr));
      } else {
        addProductToCartStorage(action.payload);
      }
      return { ...state, cart: getCartStorage() };
    case "CLEAR_CART":
      localStorage.setItem("cart", []);
      return { ...state, cart: getCartStorage() };
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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: getCartStorage() };
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
