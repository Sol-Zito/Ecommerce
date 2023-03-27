import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./components/Pages/products/ProductsContainer";
import ProductDetailContainer from "./components/Pages/ProductDetail/ProductDetailContainer";
import "./App.css";
import CardUpdate from "./components/common/Card/CardUpdate";
import CreateProductContainer from "./components/Pages/CreateProduct/CreateProductContainer";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<ProductsContainer />} />
          <Route path="/create-product" element={<CreateProductContainer />} />
          <Route path="/update-product/:id" element={<CardUpdate />} />
          <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        </Route>

        <Route path="/cart" element={<h1>Estoy en el cart</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
