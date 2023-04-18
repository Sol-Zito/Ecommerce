import React, { useContext } from "react";
import { CartContexReducer } from "../../../Context/CartContextReducer";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContexReducer);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_PRICE" });
  }, [state.cart]);

  const clearCarrito = () => {
    if (state.cart.length > 0) {
      Swal.fire({
        title: "Quiere vaciar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Carrito vaciado con exito!", "", "success");
          dispatch({ type: "CLEAR_CART" });
        } else {
          Swal.fire("El carrito queda como esta", "", "info");
        }
      });
    } else {
      Swal.fire("Aun no se han agregado productos");
    }
  };

  const removeProduct = (id) => {
    Swal.fire({
      title: "Quiere eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Producto eliminado con exito!", "", "success");
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
      } else {
        Swal.fire("El carrito queda como esta", "", "info");
      }
    });
  };

  return (
    <Cart
      state={state}
      clearCarrito={clearCarrito}
      removeProduct={removeProduct}
    />
  );
};

export default CartContainer;
