import React, { useEffect } from "react";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

const Home = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Inicio - ${pageTitle}`;
  }, []);

  return (
    <>
      <ItemListContainerComponent />
    </>
  );
};

export default Home;
