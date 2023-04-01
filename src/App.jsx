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
import ThemeContext, { themes } from "./Context/Themes";
import CartContainer from "./components/Pages/Carrito/CartContainer";
import CartContexReducerProvider from "./Context/CartContextReducer";
import UserContextProvider from "./Context/UserContext/UserContext";
import NavbarMaterial from "./components/Layout/NavbarMaterial/NavbarMaterial";
import LoginUser from "./Login/LoginUser";

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
        <CartContexReducerProvider>
          <UserContextProvider>
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/" element={<LoginUser />} />
              {/* <Route element={<Layout />}> */}
              <Route element={<NavbarMaterial />}>
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
              {/* </Route> */}
              <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
          </UserContextProvider>
        </CartContexReducerProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
