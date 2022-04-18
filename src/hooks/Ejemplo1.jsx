// Ejemplo de useState
// Crear un componente de tipo function y acceder a su estado privado
// a travez de useState y, ademas, poder modificarlo
import React, { useState } from "react";

const Ejemplo1 = () => {
  // valor inicial
  const initialState = 0;

  // valor inicial para una persona
  const personaInicial = {
    name: "Zoen",
    email: "zoenzo@gmail.com",
  };

  // queremos que el valorInicial y personaInicial sean parte del
  // estado componente para así poder gestionar su cambio y que
  // éste se vea reflejado en la vista del componente
  const [contador, setContador] = useState(initialState);
  const [persona, setPersona] = useState(personaInicial);

  // función para incrementar el estado que contiene el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  // funcion para actualizar el estado que contiene persona
  const actualizarPersona = () => {
    if (persona.name === "Zoen") {
      setPersona({
        name: "Pepe",
        email: "Pepito@gmail.com",
      });
    } else {
      setPersona({
        name: "Zoen",
        email: "zoenzo@gmail.com",
      });
    }
  };

  return (
    <>
      <h1>Ejemplo de useState</h1>
      <h2>{`Contador: ${contador}`}</h2>
      <button onClick={() => incrementarContador()}>Aumentar contador</button>
      <h2>Datos de la persona:</h2>
      <h3>{`Nombre: ${persona.name}`}</h3>
      <h3>{`Email: ${persona.email}`}</h3>
      <button onClick={() => actualizarPersona()}>Actualizar persona</button>
    </>
  );
};

export default Ejemplo1;
