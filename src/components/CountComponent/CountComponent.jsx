import React from "react";
import { Button } from "react-bootstrap";

const CountComponent = () => {
  const [item, setItem] = React.useState(0);
  const [itemTwo, setItemTwo] = React.useState(0);

  const handleAddButton = () => {
    if(item >= 10) return;
    setItem(item + 1);
  };

  const handleRemoveButton = () => {
    if(item === 0) return;
    setItem(item - 1);
  };

  const handleAddButtonTwo = () => {
    setItemTwo(itemTwo + 1);
  };

  const handleRemoveButtonTwo = () => {
    setItemTwo(itemTwo - 1);
  };

  //   //useEffect sin dependencias => se va a ejecutar cada vez que algo pase (no importa que cosa)
  //   React.useEffect(() => {
  //     console.log("useEffect sin dependencias");
  //   });

  //   //useEffect con dependencias vacias => se va ejecutar solo una vez (cuando el componente se renderiza por primera vez)
  //   React.useEffect(() => {
  //     console.log("useEffect con dependencias vacias")
  //   }, []);

  //useEffect con dependencias => se va ejecutar cuando algo ocurra en la dependencia que le enviemos
  React.useEffect(() => {
    if (itemTwo > 10) {
      alert("Llegaste al maximo de productos disponibles");
    }
  }, [itemTwo]);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleRemoveButton}>
        -
      </Button>
      <span>Item 1: {item} </span>
      <Button variant="primary" onClick={handleAddButton}>
        +
      </Button>

      <Button variant="primary" onClick={handleRemoveButtonTwo}>
        -
      </Button>
      <span>Item 2: {itemTwo} </span>
      <Button variant="primary" onClick={handleAddButtonTwo}>
        +
      </Button>
    </React.Fragment>
  );
};

export default CountComponent;
