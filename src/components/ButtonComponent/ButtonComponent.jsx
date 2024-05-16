//Props: son propiedades que el componete hereda de su padre
//Para recibir la propiedad, podemos hacerlo de dos formas:
//1. Colocando el argumento props en la función del componente
// const ButtonComponent = (props) => {}
//2. Desestructurando el objeto props
// const ButtonComponent = ({label, description}) => {}

const ButtonComponent = ({ label = "Nombre por defecto", description, myFunction }) => {

  return <button onClick={myFunction} title={description}>{label}</button>;
};

export default ButtonComponent;
