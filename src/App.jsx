import React from "react";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import "./App.css";

const App = () => {
  //Fragment --> Creado por react, se puede escribir <> </> o <React.Fragment> </React.Fragment>
  //Estados: valor que el componente tiene en el momento de ejecucion y el cuál puede mutar (que el valor del estado puede mutar). Para crear un estado en React se usa una funcion especifica que se llama useState (mejor conocida como hook useState)
  //Los estados siempre deben tener un valor inicial, ej: React.useState(0)

  const [state, setState] = React.useState(0);

  const plusOne = () => {
    setState(state + 1);
  };

  const minusOne = () => {
    setState(state - 1);
  };

  return (
    <>
      <ButtonComponent
        label="-"
        description="+1 al estado"
        myFunction={minusOne}
      />
      <span>{state}</span>
      <ButtonComponent
        label="+"
        description="-1 al estado"
        myFunction={plusOne}
      />
    </>
  );
};

export default App;
