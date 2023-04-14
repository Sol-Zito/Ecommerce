import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import ProductsContainer from "./components/Pages/products/ProductsContainer";
import ProductDetailContainer from "./components/Pages/ProductDetail/ProductDetailContainer";
import CardUpdate from "./components/common/Card/CardUpdate";
import CreateProductContainer from "./components/Pages/CreateProduct/CreateProductContainer";
import CartContainer from "./components/Pages/Carrito/CartContainer";
import CartContexReducerProvider from "./Context/CartContextReducer";
import NavbarMaterial from "./components/Layout/NavbarMaterial/NavbarMaterial";
import LoginUser from "./Login/LoginUser";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import ThemeContextProvider from "./Context/Themes";
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <CartContexReducerProvider>
          <Routes>
            <Route path="/" element={<LoginUser />} />
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
              <Route path="/cart/checkOut" element={<CheckOut />} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </CartContexReducerProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
