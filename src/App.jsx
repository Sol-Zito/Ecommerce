import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Home from "./components/Home/Home";
import ProductsContainer from "./components/products/ProductsContainer";



function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<h1>Estoy en el login</h1>} />
        <Route path="/cart" element={<h1>Estoy en el cart</h1>} />
        <Route path="/shop" element={<ProductsContainer/>} />
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
