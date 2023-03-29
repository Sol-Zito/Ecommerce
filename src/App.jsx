import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./components/Pages/products/ProductsContainer";
import ProductDetailContainer from "./components/Pages/ProductDetail/ProductDetailContainer";
import "./App.css";
import CardUpdate from "./components/common/Card/CardUpdate";
import CreateProductContainer from "./components/Pages/CreateProduct/CreateProductContainer";
import Login from "./Login/Login";
import { useMemo, useState } from "react";
import Cart from "./components/Pages/Carrito/Cart";
import ThemeContext, { themes } from "./Context/Themes";
import CartContextProvider from "./Context/CartContext";
import CartContainer from "./components/Pages/Carrito/CartContainer";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };
  const providerValue = useMemo(
    () => ({ theme, handleChangeTheme }),
    [theme, handleChangeTheme]
  );

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={providerValue}>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<ProductsContainer />} />
              <Route
                path="/create-product"
                element={<CreateProductContainer />}
              />
              <Route path="/update-product/:id" element={<CardUpdate />} />
              <Route
                path="/productDetail/:id"
                element={<ProductDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </CartContextProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
