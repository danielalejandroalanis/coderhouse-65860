import React from "react";
import { grid } from "ldrs";
const LoaderComponent = () => {
  grid.register();
  return (
    <div style={{ width: "100%", height: "50%", margin: "auto", color: "white" }}>
      <l-grid size="60" speed="1.5" color="white"></l-grid>
    </div>
  );
};

export default LoaderComponent;
