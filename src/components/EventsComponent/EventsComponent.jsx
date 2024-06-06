import React from "react";

const EventsComponent = ({ customSum }) => {
  const handleClick = () => {
    alert("Click dos");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Daniel") {
      alert("Hola Daniel");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{ color: "white" }}
        onClick={() => {
          alert("Click");
        }}
      >
        Click me!
      </button>
      <button style={{ color: "white" }} onClick={handleClick}>
        Click me!
      </button>
      <button style={{ color: "white" }} onClick={customSum}>
        Sumame!
      </button>

      <input
        type="text"
        placeholder="Dame un valor"
        id="myInput"
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value === "Daniel") {
            alert("Hola Daniel");
          }
        }}
      />

      <input
        type="text"
        placeholder="Dame un valor"
        id="myInput"
        onChange={handleChange}
      />

      <div
        onMouseOver={() => {
          console.log("Estas pasando sobre el div");
        }}
        onMouseOut={() => {
          console.log("Estas fuera del div");
        }}
      >
        Pasa el raton sobre mi
      </div>
    </div>
  );
};

export default EventsComponent;
