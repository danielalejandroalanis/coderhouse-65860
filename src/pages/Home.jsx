import React, { useEffect } from "react";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

const Home = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Inicio - ${pageTitle}`;
  }, []);
  
  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     console.log(window.scrollY);
  //   });

  //   //Funcion cleanup para el useEffect
  //   return () => {
  //     document.removeEventListener('scroll', () => {
  //       console.log(window.scrollY);
  //     });
  //   }

    
  // }, [])

  useEffect(() => {
    //Todo lo que se ejecuta cuando el componente se monta
    console.log('Se montó el componente');

    //Funcion cleanup para el useEffect (todo lo que se ejecuta cuando el componente se desmonta)
    return () => {
      console.log('Se desmontó el componente');
    };

  }, []);

  
  return (
    <>
      <ItemListContainerComponent />
    </>
  );
};

export default Home;
