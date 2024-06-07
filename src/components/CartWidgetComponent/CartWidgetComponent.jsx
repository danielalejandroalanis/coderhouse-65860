import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const customStyles = {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  return (
    <div>
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={customStyles}>0</span>
    </div>
  );
};

export default CartWidgetComponent;
