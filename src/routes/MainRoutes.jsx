import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import EventPage from "../pages/EventPage";
import Category from "../pages/Category";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home pageTitle="Productos" />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
        <Route path="/eventos/fantasticos" element={<EventPage />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
