import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    console.log("El carrito fue vaciado");
    console.log("este es el cart:", cart);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const addToCart = (objeto) => {
    console.log("objeto recibido", objeto);
    if (isInCart(objeto.id)) {
      let newArr = cart.map((elemento) => {
        if (elemento.id === objeto.id) {
          console.log("elemento", elemento);
          return {
            ...elemento,
            quantity: elemento.quantity + objeto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, objeto]);
      console.log("elementos", cart);
    }

    console.log("este es el cart en add:", cart);
  };

  const deleteProduct = (objeto) => {
    const newCart = cart.filter((elemento) => elemento.id !== objeto.id);
    setCart(newCart);
    console.log("este es el cart en delete:", cart);
  };

  const getTotalPrice = () => {
    let total = cart.reduce(
      (acc, elemento) => acc + elemento.price * elemento.quantity,
      0
    );

    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, clearCart, addToCart, deleteProduct, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
