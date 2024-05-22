import React from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBarComponent />
      {children}
      <footer style={{ color: "white" }}>Test</footer>
    </>
  );
};

export default MainLayout;
