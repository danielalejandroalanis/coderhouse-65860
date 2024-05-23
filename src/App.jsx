import React from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //Promesas
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isTrue = false;
      if (isTrue) {
        resolve([
          {
            id: "dasdasd",
            name: "Mi producto",
            description: "Mi nuevo producto super buena onda hiper caro",
            stock: 10
          },
        ]);
      } else {
        reject(Error("Todo fallo"));
      }
    }, 3000);
  });

  myPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("termine mi ejecución");
    });

  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenidos a mi pagina de venta Ezio Auditore" />
    </>
  );
}

export default App;
