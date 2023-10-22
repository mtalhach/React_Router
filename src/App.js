import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Orderconfirm from "./components/Orderconfirm";
import NomatchFound from "./components/NomatchFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import Userdetails from "./components/Userdetails";
import Admin from "./components/Admin";
const LazyLoad = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<LazyLoad />} />
        <Route path="orderconfirm" element={<Orderconfirm />} />
        <Route path="*" element={<NomatchFound />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<Userdetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
