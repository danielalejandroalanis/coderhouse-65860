import React from "react";
import CountComponent from "../CountComponent/CountComponent";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      {/* {greeting} */}
      <CountComponent />
    </div>
  );
};

export default ItemListContainerComponent;
