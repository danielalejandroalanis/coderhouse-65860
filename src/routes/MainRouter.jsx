import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Cart from "../pages/Cart";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
